pipeline {
  agent any
  stages {
    stage('Test ') {
      steps {
        sh 'echo "test"'
      }
    }
    stage('Sonar') {
      steps {
        sh "./gradlew clean sonarqube"
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Test"'
      }
    }
    stage('Test Web') {
      steps {
        sh 'echo "test"'
      }
    }
  }
}
