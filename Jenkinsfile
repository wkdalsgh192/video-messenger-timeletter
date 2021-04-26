// 젠킨스 파이프라인 플러그인을 호출하기 위한 블록
pipeline {
    // 파이프라인을 실행하고 싶은 위치 정의
    agent none
    // gitlab 소스를 jenkins 디렉토리로 내려받는 경우
    // true인 경우 내려받는 프로세스 스킵
    // false인 경우 gitlab 소스 체크
    options {}
    // stage 모음
    stages {
        // 실제 작업이 수행되는 블록
        // 해당 stage 명으로 jenkins 화면에 표시된다.
        stage('Build and Test') {
            // docker image에 명시된 image를 활용하여 steps 수행
            agent {
                docker {
                    image 'maven:3-alpine'
                    agrs '-v /root/.m2:/root/.m2'
                }
            }
            options {skipDefaultCheckout(false)}
            steps {
                sh 'mvn -B -DskipTests -f /var/jenkins_home/workspace/caterpie/backend clean package'
            }
        }
        stage('Docker build') {
            agent any
            steps {
                sh 'docker build -t latest_backend:latest /var/jenkins_home/workspace/caterpie/backend'
            }
        }
        stage('Docker run') {

        }
    }
}