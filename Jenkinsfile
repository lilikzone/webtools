pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '/usr/local/n/versions/node/10.15.0/bin/npm install'
      }
    }
    stage('Check File') {
      steps {
        sh 'cd ~'
      }
    }
    stage('key Permission') {
      steps {
        sh 'chmod 600 ssh.key'
      }
    }
    stage('Copy') {
      steps {
        sh 'scp -i ssh.key dist root@172.31.8.215:/home/'
      }
    }
  }
}