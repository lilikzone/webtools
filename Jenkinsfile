pipeline {
  agent any
  stages {
    stage('Test ') {
      steps {
        sh 'ping 172.31.8.214 -n 10'
      }
    }
    stage('Test') {
      steps {
        sh '''stage(\'SonarQube analysis\') { 
        withSonarQubeEnv(\'Sonar\') { 
          sh \'mvn org.sonarsource.scanner.maven:sonar-maven-plugin:3.3.0.603:sonar \' + 
          \'-sonar.projectKey=frontend-XLHOME \' +
          \'-sonar.projectName=frontend-XLHOME \' +
          \'-sonar.projectVersion=1.0 \' +
          \'-sonar.sources=/var/lib/jenkins/workspace/$JOB_NAME/tools \' +
          \'-sonar.java.binaries=/var/lib/jenkins/workspace/$JOB_NAME/tools \' 
        }
}'''
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