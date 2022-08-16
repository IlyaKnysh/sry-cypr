pipeline{
agent any

tools {nodejs "node"}
stages{
stage ('Cypress'){
    parallel {
        stage('Cypress 1') {
            agent {
                node {
                    label 'agent-1'
                }
            }
            steps {
                sh 'npm install --silent'
                sh 'npm start & npx wait-on http://localhost:3000'
                sh "CYPRESS_API_URL=\"http://Sorry-Cypress-Instance-IP:1234/\" npx cy2 run --record --key XXX --parallel --ci-build-id env.BUILD_ID"
            }
        }
        stage('Cypress 2') {
            agent {
                node {
                    label 'agent-2'
                }
            }
            steps {
                sh 'npm install --silent'
                sh 'npm start & npx wait-on http://localhost:3000'
                sh "CYPRESS_API_URL=\"http://Sorry-Cypress-Instance-IP:1234/\" npx cy2 run --record --key XXX --parallel --ci-build-id env.BUILD_ID"
            }
        }
        stage('Cypress 3') {
            agent {
                node {
                    label 'agent-3'
                }
            }
            steps {
                sh 'npm install --silent'
                sh 'npm start & npx wait-on http://localhost:3000'
                sh "CYPRESS_API_URL=\"http://Sorry-Cypress-Instance-IP:1234/\" npx cy2 run --record --key XXX --parallel --ci-build-id env.BUILD_ID"
            }
        }
    }
}
}
}