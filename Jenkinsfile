pipeline {
  agent any
  environment {
    NODE_ENV = 'test'
    SONAR_HOST_URL = credentials('sonar-host-url')
    SONAR_TOKEN    = credentials('sonar-token')
  }
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install') { steps { sh 'npm ci' } }
    stage('Lint')    { steps { sh 'npm run lint' } }
    stage('Unit Tests') { steps { sh 'npm run test:unit -- --ci --coverage' } }

    // Descomentar cuando un microservicio use DB
    // stage('Integration Tests') { steps { sh 'npm run test:integration' } }

    stage('E2E Tests') { steps { sh 'npm run test:e2e' } }
    stage('SonarQube') {
      steps {
        withSonarQubeEnv('SonarQubeServer') {
          sh """
            npx sonar-scanner \
              -Dsonar.host.url=$SONAR_HOST_URL \
              -Dsonar.login=$SONAR_TOKEN
          """
        }
      }
    }
    stage('Build') { steps { sh 'npm run build' } }
  }
}
