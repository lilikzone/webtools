pipeline {
  agent any
  stages {
    stage('Deploy') {
      parallel {
        stage('Deploy') {
          steps {
            sh 'node -v'
          }
        }
        stage('Build') {
          steps {
            sh 'npm -v'
          }
        }
      }
    }
  }
}