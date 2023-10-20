// pipeline {
//     agent any

//     environment {
//         DOCKER_REGISTRY_URL = 'https://7tiuxysa.c1.gra9.container-registry.ovh.net'
//         DOCKER_PROJECT_NAME = 'mydemoproject'
//     }

//     stages {
//         stage('Build and Push React Image') {
//             when {
//                 expression {
//                     return (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'develop')
//                 }
//             }
//             steps {
//                 dir('react') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
                        
//                         // Print debugging information
//                         echo "BRANCH_NAME: ${env.BRANCH_NAME}"
//                         echo "BUILD_ID: ${env.BUILD_ID}"
                        
//                         // Constructing the Docker image tag
//                         def reactImageTag = "${DOCKER_PROJECT_NAME}/frontend:${env.BRANCH_NAME}-${env.BUILD_ID}"
//                         echo "Constructed React Image Tag: ${reactImageTag}"
                        
//                         // Build and push the Docker image
//                         docker.build(reactImageTag, "-f Dockerfile .")
//                         docker.withRegistry('https://7tiuxysa.c1.gra9.container-registry.ovh.net', 'ovh-registry-credentials') {
//                             docker.image(reactImageTag).push()
//                         }
//                     }
//                 }
//             }
//         }

//         stage('Build and Push Node.js Image') {
//             when {
//                 expression {
//                     return (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'develop')
//                 }
//             }
//             steps {
//                 dir('node') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
                        
//                         // Print debugging information
//                         echo "BRANCH_NAME: ${env.BRANCH_NAME}"
//                         echo "BUILD_ID: ${env.BUILD_ID}"
                        
//                         // Constructing the Docker image tag
//                         def nodeImageTag = "${DOCKER_PROJECT_NAME}/backend:${env.BRANCH_NAME}-${env.BUILD_ID}"
//                         echo "Constructed Node.js Image Tag: ${nodeImageTag}"
                        
//                         // Build and push the Docker image
//                         docker.build(nodeImageTag, "-f Dockerfile .")
//                         docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
//                             docker.image(nodeImageTag).push()
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }



pipeline {
    agent any

    parameters {
        choice(
            name: 'DEPLOY_REACT_IMAGE',
            choices: getAvailableTags('frontend'),
            description: 'Select the React image to deploy'
        )
        choice(
            name: 'DEPLOY_NODE_IMAGE',
            choices: getAvailableTags('backend'),
            description: 'Select the Node.js image to deploy'
        )
    }

    stages {
        stage('Prepare an environment for the run') {
            steps {
                script {
                    // Get available tags dynamically for React
                    def availableReactTags = getAvailableTags('frontend')
                    echo "Available Tags for React: ${availableReactTags}"

                    // Get available tags dynamically for Node.js
                    def availableNodeTags = getAvailableTags('backend')
                    echo "Available Tags for Node.js: ${availableNodeTags}"
                }
            }
        }

        stage('Build and Push React Image') {
            when {
                expression {
                    return (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'develop')
                }
            }
            steps {
                script {
                    echo "Selected React Image: ${params.DEPLOY_REACT_IMAGE}"
                    // ... rest of your script for React image
                }
            }
        }

        stage('Build and Push Node.js Image') {
            when {
                expression {
                    return (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'develop')
                }
            }
            steps {
                script {
                    echo "Selected Node.js Image: ${params.DEPLOY_NODE_IMAGE}"
                    // ... rest of your script for Node.js image
                }
            }
        }
    }
}

def getAvailableTags(imageType) {
    // Use Docker Registry API to get image tags
    def registryUrl = 'https://7tiuxysa.c1.gra9.container-registry.ovh.net/v2/'
    def imageName = 'mydemoproject/' + (imageType == 'frontend' ? 'frontend' : 'backend')

    def availableTags = []
    try {
        def apiUrl = "${registryUrl}${imageName}/tags/list"
        availableTags = script { sh(script: "curl -s ${apiUrl}", returnStdout: true).trim() }
        availableTags = readJSON text: availableTags
        availableTags = availableTags.tags ?: []
    } catch (Exception e) {
        echo "Error fetching tags: ${e.message}"
    }

    return availableTags
}








// pipeline {
//     agent any

//     environment {
//         DOCKER_REGISTRY_URL = 'https://7tiuxysa.c1.gra9.container-registry.ovh.net'
//         DOCKER_PROJECT_NAME = 'mydemoproject'
//     }

//     stages {
//         stage('Build and Push React Image') {
//             when {
//                 expression {
//                     return (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'develop')
//                 }
//             }
//             steps {
//                 dir('react') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
//                         def reactImageTag = "${DOCKER_PROJECT_NAME}/frontend:${env.BRANCH_NAME}-${env.BUILD_ID}"
//                         docker.build(reactImageTag, "-f Dockerfile .")
//                         docker.withRegistry('https://7tiuxysa.c1.gra9.container-registry.ovh.net', 'ovh-registry-credentials') {
//                             docker.image(reactImageTag).push()
//                         }
//                     }
//                 }
//             }
//         }

//         stage('Build and Push Node.js Image') {
//             when {
//                 expression {
//                     return (env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'develop')
//                 }
//             }
//             steps {
//                 dir('node') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
//                         def nodeImageTag = "${DOCKER_PROJECT_NAME}/backend:${env.BRANCH_NAME}-${env.BUILD_ID}"
//                         docker.build(nodeImageTag, "-f Dockerfile .")
//                         docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
//                             docker.image(nodeImageTag).push()
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
//         REACT_IMAGE_TAG = "${env.BUILD_ID}"
//         NODE_IMAGE_TAG = "${env.BUILD_ID}"
//         DOCKER_REGISTRY_URL = 'https://7tiuxysa.c1.gra9.container-registry.ovh.net'
//         DOCKER_PROJECT_NAME = 'mydemoproject'
//         BRANCH_NAME = "${env.BRANCH_NAME}"
//     }

//     stages {
//         stage('Build and Push React Image') {
//             steps {
//                 dir('react') {
//                     script {
//                         echo "DOCKER_REGISTRY_URL: ${DOCKER_REGISTRY_URL}"
//                         def reactImageTag = "${DOCKER_PROJECT_NAME}/frontend:${REACT_IMAGE_TAG}-${BRANCH_NAME}"
//                         docker.build(reactImageTag, "-f Dockerfile .")
//                         docker.withRegistry('https://7tiuxysa.c1.gra9.container-registry.ovh.net', 'ovh-registry-credentials') {
//                             docker.image(reactImageTag).push()
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
//                         def nodeImageTag = "${DOCKER_PROJECT_NAME}/backend:${NODE_IMAGE_TAG}-${BRANCH_NAME}"
//                         docker.build(nodeImageTag, "-f Dockerfile .")
//                         docker.withRegistry("${DOCKER_REGISTRY_URL}", 'ovh-registry-credentials') {
//                             docker.image(nodeImageTag).push()
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }



