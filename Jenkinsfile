pipeline {
  agent any
  stages {
    stage('Deploy') {
      parallel {
        stage('Deploy') {
          steps {
            sh 'npm install'
          }
        }
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }
  }
}