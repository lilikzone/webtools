pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '/usr/local/n/versions/node/10.15.0/bin/npm install'
      }
    }
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh '/usr/local/n/versions/node/10.15.0/bin/npm run build'
          }
        }
        stage('Check File') {
          steps {
            sh 'ls -la'
          }
        }
      }
    }
    stage('ssh') {
      parallel {
        stage('Create Key') {
          steps {
            sh 'touch ssh.key'
          }
        }
        stage('add key ') {
          steps {
            sh '''echo " -----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAscyqvXHFR2Mb4i8KvfVory6sEsA7d328VPTtIk1gnBSKQ8fZ
NE7FJvKvA7TE3w/AQZfnkJqr8yr4jzS0jn4Tt0bVH95iq58A63jvfIIzy0OJfOdQ
/YTGba1s1oMnUssTnUh7OxhPzDKLxgSpgSr0RWcYvwpuDkNyGhVTxV3XurtyZtxE
Pz/9qhl10M8GczunMqb/HpmHfxhMu9LGYMJGpPH5/xhGgE69vrgdH5ZPGBisGCoX
9C2mJsMoZw+sXk1k3M5alwoB9rzNpCQG+DgvYzRBuuMCcx5CXZzkJirNPWtI1PuL
hus+0XKJIIA9CqAuBJiFDGKUH0JpiSLFwfOkxQIDAQABAoIBAG9skwfcN8TwIHZU
Ashe9nbqqd2qaNoOiys2vzGDCmtmF+w4Xy9/ueAZsIKDE+mypkq1FuKxe9cNc+3T
GuA9tL9j/YZWSMHDCMGI7ZS6yBi3P39uO3xVbEEpsQ6R7N/e8nDcDpZPOxr+BkhX
fZ68O48O+BwpPiVkMSqVeQU0NVEIv57LtZDVW/NDZTTOxOdWzxC0B4fDCYXpYAXz
gP0q0r6vHXghtuhQkwm2yqyE+gM7U/px4bmEoT34apWJY5oroPXXSTzt4tXiaoeV
ypCbKgN7lYK4CiVoQHuhpI3XuVBJUJGTqmvgwvC59uIpF2VkJjeByPWtsXv5l9L2
nUAhnZUCgYEA9gDGn+rW94XbzfSRrhrugT1oNXYK7PGIwc7BYpNE/vMpKg4ZpkE9
x1RRoarSJfszHHt/6nwgnXxzykZolE0ImcTNtHV6ZjygJsmJMF1Mv4E7IS5+5wPX
UAbm2HqVPjecCEFFTOGBcIH139P5z8FLiUx0x0gNQd7GtIhQgjA8p2MCgYEAuQZa
ujknQOp4YZF62Vajj8MGRuOcueZLvt1QRqvTVbwIU6IJ6FtkikT3IBbaq9hEoIYY
dX1yUseIcNiKw3/Xto8Y1TokwW64jTxgGLeeXFzhTeLacY4ELzsN1N85SfwWl1FP
IvrvyA4+3/zI/J64iAyUW7E7IPZokplmHKhRH7cCgYBKsaOdjNWmpGtAFsFhBuZi
MX4BtYzNsuzeQ+PuBV9OthBKp6tcErUqX8zFdLOIOsSjIlCNpxDUIKSbx1MbrGQv
JFV9NKpsfn32KP1RxRJ3l0qX4aFAjacDsoTHODk2gfYLf54GIPaHbb51LszMKxm/
X4qZs6Pq2zSkPjuLvA++lwKBgDHVH0x2pjbar69/kjnFFupaWW9wUD7VYuM2Ei/m
iVXW/dsgklCNhOekqXZwEVclOV6OnznNnqPi78GM4NrErOGTatnK/ilG29fWQf+G
PNWdgmUKy1C4MjJSUmhZ8sEVbzQ0Bv9h3IDiLVcAa1V2njauRKrpcgZvtzx8qj7f
qnHDAoGBANsfWGhuB2BxfzRd7PqrU8zebX/g87ISu0sUybt0I+e/rbtJEORdvDsq
fU+eQNd5akRv88gg9SSoUgB4LSebbNRGQn72iBv8q3AyH7eNo/7po6sEl3vwZ6ER
U+bgLEOLzJmjLB3lbd7e8B+cDJxZE8HbHGuOOS2ITaUNxZOg5E1o
-----END RSA PRIVATE KEY----- " >> ssh.key'''
          }
        }
      }
    }
    stage('Check ') {
      steps {
        sh 'ls -la'
      }
    }
    stage('Check Key ') {
      parallel {
        stage('Check Key ') {
          steps {
            sh 'cat ssh.key'
          }
        }
        stage('Change File acces') {
          steps {
            sh 'chmod 600 ssh.key'
          }
        }
      }
    }
    stage('Copy') {
      steps {
        sh 'scp -i ssh.key dist root@172.31.8.215:/home/'
      }
    }
  }
}