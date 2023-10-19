pipeline {
    agent any

    environment {
        REACT_IMAGE_TAG = "react-${env.BUILD_ID}"
        NODE_IMAGE_TAG = "node-${env.BUILD_ID}"
    }

    stages {
        stage('Build and Push React Image') {
            steps {
                dir('react') {
                    script {
                        docker.build("7tiuxysa.c1.gra9.container-registry.ovh.net/mydemoproject/frontend:${REACT_IMAGE_TAG}", "-f Dockerfile .")
                        docker.withRegistry('7tiuxysa.c1.gra9.container-registry.ovh.net', 'ovh-registry-credentials') {
                            docker.push("7tiuxysa.c1.gra9.container-registry.ovh.net/mydemoproject/frontend:${REACT_IMAGE_TAG}")
                        }
                    }
                }
            }
        }

        stage('Build and Push Node.js Image') {
            steps {
                dir('node') {
                    script {
                        docker.build("7tiuxysa.c1.gra9.container-registry.ovh.net/mydemoproject/backend:${NODE_IMAGE_TAG}", "-f Dockerfile .")
                        docker.withRegistry('7tiuxysa.c1.gra9.container-registry.ovh.net', 'ovh-registry-credentials') {
                            docker.push("7tiuxysa.c1.gra9.container-registry.ovh.net/mydemoproject/backend:${NODE_IMAGE_TAG}")
                        }
                    }
                }
            }
        }
    }
}
