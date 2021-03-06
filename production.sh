export RAILS_ENV=production
export RACK_ENV=production
export DISABLE_DATABASE_ENVIRONMENT_CHECK=1

ps -ef | grep puma | grep -v grep | awk '{print $2}' | xargs kill

sudo service postgresql restart
bundle install

sudo bower install --allow-root

rails db:environment:set RAILS_ENV=production
rails db:drop
rails db:create
rails db:migrate
rails db:seed

rails assets:precompile

bundle exec rails server -p 3000 -b 0.0.0.0 -d
