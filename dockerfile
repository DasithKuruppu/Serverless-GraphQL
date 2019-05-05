FROM node:latest

# install python tooling
RUN apt-get update -y && apt-get install -y python-dev python-pip && pip install --upgrade pip

# install other utils
RUN apt-get update -y && apt-get install -y screen

# install aws-cli
RUN pip install awscli

# install java
RUN apt-get update && \
	apt-get install -y openjdk-8-jdk && \
	apt-get install -y ant && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* && \
	rm -rf /var/cache/oracle-jdk8-installer;
	
# Fix certificate issues, found as of 
# https://bugs.launchpad.net/ubuntu/+source/ca-certificates-java/+bug/983302
RUN apt-get update && \
	apt-get install -y ca-certificates-java && \
	apt-get clean && \
	update-ca-certificates -f && \
	rm -rf /var/lib/apt/lists/* && \
	rm -rf /var/cache/oracle-jdk8-installer;

# Setup JAVA_HOME, this is useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

# change work directory

RUN mkdir -p /app
WORKDIR /app

# install serverless framework
RUN npm install -g serverless

RUN npm install

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 8000

CMD npm run dynamodb-install