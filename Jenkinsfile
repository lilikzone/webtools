pipeline {
  agent any
  stages {
    stage('Deploy') {
      parallel {
        stage('Deploy') {
          steps {
            sh '/usr/local/n/versions/node/10.15.0/bin/npm install'
          }
        }
        stage('Build') {
          steps {
            sh '/usr/local/n/versions/node/10.15.0/bin/npm build'
          }
        }
      }
    }
  }
}