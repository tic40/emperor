namespace :task_crawl do

  desc "task crawl"
  task feeds: :environment do
    ActiveRecord::Base.transaction do
      # delete all entries and comments
      Entry.destroy_all

      Feed.all.each do |f|
        Feedjira::Feed.fetch_and_parse(f.url).entries.each do |item|

          # this is for displaying progress
          print "."

          # fetch hatena bookmark info via api
          uri = URI.parse "http://b.hatena.ne.jp/entry/json/?url=#{item.url}"
          req = Net::HTTP::Get.new(uri.to_s, 'User-Agent': 'api')
          res = Net::HTTP.start(uri.host, uri.port) do |http|
            http.request req
          end
          res.body = JSON.parse(res.body)

          # save entry
          entry = Entry.create!(
            title: item.title,
            published: item.published,
            content: item.content,
            url: item.url,
            feed_id: f.id,
            eid: res.body['eid'],
            bookmark_count: res.body['bookmarks'].present? ? res.body['bookmarks'].count : nil
          )

          # save comments
          if res.body['bookmarks'].present?
            res.body['bookmarks'].each do |b|
              if b['comment'].present?
                entry.comments.create!(
                  body: b['comment'],
                  timestamp: b['timestamp'],
                  user: b['user']
                )
              end
            end
          end
          sleep 0.1

        end
        sleep 1
      end
    end
    puts 'done'
  end
end
