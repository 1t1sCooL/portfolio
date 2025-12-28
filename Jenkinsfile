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
                    echo "🐳 Building Docker image for static site..."

                    docker build \\
                        -t ${FULL_IMAGE} \\
                        -t ${REGISTRY}/${IMAGE_NAME}:latest \\
                        .

                    docker push ${FULL_IMAGE} || echo "⚠️ Local registry not available, using local image"
                """
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                    echo "🚀 Deploying static site to Kubernetes..."

                    kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: main-page
spec:
  replicas: 2
  selector:
    matchLabels:
      app: main-page
  template:
    metadata:
      labels:
        app: main-page
    spec:
      containers:
        - name: nginx
          image: ${FULL_IMAGE}
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: main-page
spec:
  selector:
    app: main-page
  ports:
    - port: 80
      targetPort: 80
EOF
                """
            }
        }

        stage('Ingress (optional)') {
            steps {
                script {
                    if (fileExists('kubernetes/ingress.yaml')) {
                        echo "🌍 Applying Ingress from repository"
                        sh 'kubectl apply -f kubernetes/ingress.yaml'
                    } else {
                        echo "ℹ️ No ingress.yaml found. Skipping external exposure."
                    }
                }
            }
        }
    }
}
