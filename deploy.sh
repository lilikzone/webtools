#!/bin/bash
echo " Open Directory"
cd /var/www/fronted/SOURCE/

echo "Install all dependece"
echo " ++++++++++++++++++++++++++"
npm install

echo "build source bundle for web server"
echo "==================================="

npm run build

echo "Move bundle to Public source"
\cp -avr dist/* ../
\cp -avr src/assets ../

echo "Check Web Server running"
echo "++++++++++++++++++++++++++++++"

if pgrep -x "httpd" > /dev/null
then
  echo "Server already running please check at"
  echo "https://api.adlsandbox.com"
  else
  echo "Server Down"
  service httpd restart
fi
