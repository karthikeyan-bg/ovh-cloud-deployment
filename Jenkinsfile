pipeline {
    agent any

    environment {
        REACT_IMAGE_TAG = "react-${env.BUILD_ID}"
        NODE_IMAGE_TAG = "node-${env.BUILD_ID}"
        DOCKER_REGISTRY_URL = 'https://7tiuxysa.c1.gra9.container-registry.ovh.net'
    }

    stages {
        stage('Build and Push React Image') {
            steps {
                dir('react') {
                    script {
                        docker.build("${DOCKER_REGISTRY_URL}/mydemoproject/frontend:${REACT_IMAGE_TAG}", "-f Dockerfile .")
                        docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
                            docker.push("${DOCKER_REGISTRY_URL}/mydemoproject/frontend:${REACT_IMAGE_TAG}")
                        }
                    }
                }
            }
        }

        stage('Build and Push Node.js Image') {
            steps {
                dir('node') {
                    script {
                        docker.build("${DOCKER_REGISTRY_URL}/mydemoproject/backend:${NODE_IMAGE_TAG}", "-f Dockerfile .")
                        docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
                            docker.push("${DOCKER_REGISTRY_URL}/mydemoproject/backend:${NODE_IMAGE_TAG}")
                        }
                    }
                }
            }
        }
    }
}

