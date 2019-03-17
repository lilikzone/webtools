#!/bin/bash
echo " Open Directory"
cd /mnt/web/SOURCE
echo "Install all dependece"
echo " ++++++++++++++++++++++++++"
npm install

echo "build source bundle for web server"
echo "==================================="

npm run build

echo "copy CSS Design to Public Folder"
rm -rf ../public
mkdir ../public
cp -avr ../dist/* ../public

echo "Move bundle to Public source"
\cp -avr dist/* ../public
\cp -avr src/assets ../public

echo "List Directory Web server"
ls -la ../public

echo "Check Web Server running"
echo "++++++++++++++++++++++++++++++"

if pgrep -x "httpd" > /dev/null
then
  echo "Server already running please check at"
  echo "https://web.ibase-xl.com"
  else
  echo "Server Down"
  service httpd restart
fi
