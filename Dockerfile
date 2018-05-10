FROM centos:7
ARG ruby_ver="2.5.1"
ARG node_ver="9.5.0"

RUN yum -y update
RUN yum -y install epel-release
RUN yum -y install git make autoconf curl wget zsh vim
RUN yum -y install gcc-c++ glibc-headers openssl-devel readline libyaml-devel readline-devel zlib zlib-devel sqlite-devel bzip2 ruby-devel libffi-devel
RUN yum -y install postgresql-devel
RUN yum clean all

RUN git clone https://github.com/rbenv/rbenv.git /usr/local/rbenv
RUN git clone https://github.com/rbenv/ruby-build.git /usr/local/rbenv/plugins/ruby-build

RUN \
  echo 'export RBENV_ROOT="/usr/local/rbenv"' >> /etc/profile.d/rbenv.sh && \
  echo 'export PATH="${RBENV_ROOT}/bin:${PATH}"' >> /etc/profile.d/rbenv.sh && \
  echo 'eval "$(rbenv init --no-rehash -)"' >> /etc/profile.d/rbenv.sh

RUN \
  source /etc/profile.d/rbenv.sh && \
  rbenv install ${ruby_ver} && \
  rbenv global ${ruby_ver}

RUN \
  source /etc/profile.d/rbenv.sh && \
  gem update --system && \
  gem install --no-ri --no-rdoc rails && \
  gem install bundler --force

# install nvm
RUN \
  git clone https://github.com/creationix/nvm.git ~/.nvm && \
  source ~/.nvm/nvm.sh && \
  echo 'source ~/.nvm/nvm.sh' >> .bashrc && \
  nvm install ${node_ver} && \
  npm install -g yarn

# timezone setting
RUN cp /etc/localtime /etc/localtime.org
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# application directory
RUN mkdir /app
WORKDIR /app

EXPOSE 3000

CMD ["/sbin/init"]
