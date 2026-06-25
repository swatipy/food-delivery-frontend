pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }


        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }


        stage('Docker Build') {
            steps {
                sh 'docker build -t food-delivery-ui .'
            }
        }

    }
}