pipeline {
    agent any

    environment {
        REACT_IMAGE_TAG = "react-${env.BUILD_ID}"
        NODE_IMAGE_TAG = "node-${env.BUILD_ID}"
        DOCKER_REGISTRY_URL = '7tiuxysa.c1.gra9.container-registry.ovh.net'
        DOCKER_PROJECT_NAME = 'mydemoproject'
    }

    stages {
        stage('Build and Push React Image') {
            steps {
                dir('react') {
                    script {
                        def reactImageTag = "${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/frontend:${REACT_IMAGE_TAG}"
                        echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
                        
                        // Build the Docker image
                        def reactImage = docker.build(reactImageTag, "-f Dockerfile .")
                        
                        // Tag the Docker image correctly
                        reactImage.tag("${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/frontend:latest")
                        
                        // Push the Docker image to the registry
                        reactImage.push()
                    }
                }
            }
        }

        stage('Build and Push Node.js Image') {
            steps {
                dir('node') {
                    script {
                        def nodeImageTag = "${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/backend:${NODE_IMAGE_TAG}"
                        echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
                        
                        // Build the Docker image
                        def nodeImage = docker.build(nodeImageTag, "-f Dockerfile .")
                        
                        // Tag the Docker image correctly
                        nodeImage.tag("${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/backend:latest")
                        
                        // Push the Docker image to the registry
                        nodeImage.push()
                    }
                }
            }
        }
    }
}



















// pipeline {
//     agent any

//     environment {
//         REACT_IMAGE_TAG = "react-${env.BUILD_ID}"
//         NODE_IMAGE_TAG = "node-${env.BUILD_ID}"
//         DOCKER_REGISTRY_URL = '7tiuxysa.c1.gra9.container-registry.ovh.net'
//         // DOCKER_REGISTRY_URL = 'https://7tiuxysa.c1.gra9.container-registry.ovh.net'
//         DOCKER_PROJECT_NAME = 'mydemoproject'
//     }

//     stages {
//         stage('Build and Push React Image') {
//             steps {
//                 dir('react') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
//                         def reactImageTag = "${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/frontend:${REACT_IMAGE_TAG}"
//                         docker.build(reactImageTag, "-f Dockerfile .")
//                         docker.withRegistry('https://7tiuxysa.c1.gra9.container-registry.ovh.net', 'ovh-registry-credentials') {
//                             docker.push(reactImageTag)
//                         }
//                     }
//                 }
//             }
//         }

//         stage('Build and Push Node.js Image') {
//             steps {
//                 dir('node') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
//                         def nodeImageTag = "${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/backend:${NODE_IMAGE_TAG}"
//                         docker.build(nodeImageTag, "-f Dockerfile .")
//                         docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
//                             docker.push(nodeImageTag)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }





// pipeline {
//     agent any

//     environment {
//         REACT_IMAGE_TAG = "react-${env.BUILD_ID}"
//         NODE_IMAGE_TAG = "node-${env.BUILD_ID}"
//         DOCKER_REGISTRY_URL = '7tiuxysa.c1.gra9.container-registry.ovh.net'
//         DOCKER_PROJECT_NAME = 'mydemoproject'
//     }

//     stages {
//         stage('Build and Push React Image') {
//             steps {
//                 dir('react') {
//                     script {
//                         def reactImageTag = "${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/frontend:${REACT_IMAGE_TAG}"
//                         docker.build(reactImageTag, "-f Dockerfile .")
//                         docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
//                             docker.push(reactImageTag)
//                         }
//                     }
//                 }
//             }
//         }

//         stage('Build and Push Node.js Image') {
//             steps {
//                 dir('node') {
//                     script {
//                         def nodeImageTag = "${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}/backend:${NODE_IMAGE_TAG}"
//                         docker.build(nodeImageTag, "-f Dockerfile .")
//                         docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
//                             docker.push(nodeImageTag)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
