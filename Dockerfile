FROM debian:bookworm-slim AS debian_kiev
ENV LANG=en_US \
    LANGUAGE=en \
    LC_ALL=en_US.UTF-8 \
    LC_COLLATE=en_US.UTF-8
RUN ln -sf /usr/share/zoneinfo/Europe/Kiev /etc/localtime
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y curl

FROM debian_kiev AS debian_node
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && apt-get install -y nodejs npm
WORKDIR /server
EXPOSE 3000
