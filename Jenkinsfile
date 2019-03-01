pipeline {
  agent any
  stages {
    stage('Deploy') {
      steps {
        withSonarQubeEnv 'Sonar'
      }
    }
  }
}