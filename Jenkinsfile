pipeline {
    agent any

    environment {
        REGISTRY = 'localhost:5000'
        IMAGE_NAME = 'main-page'
        IMAGE_TAG = "${BUILD_NUMBER}"
        FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    echo "🐳 Building Docker image..."

                    docker build \\
                        -t ${FULL_IMAGE} \\
                        -t ${REGISTRY}/${IMAGE_NAME}:latest \\
                        .

                    docker push ${FULL_IMAGE} || true
                """
            }
        }

        stage('Update image in manifests') {
            steps {
                sh """
                    echo "📝 Updating image in kubernetes manifests..."

                    sed -i "s|image: .*main-page.*|image: ${FULL_IMAGE}|g" kubernetes/deployment.yaml
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                    echo "🚀 Applying kubernetes manifests..."

                    kubectl apply -k kubernetes/
                """
            }
        }
    }
}
