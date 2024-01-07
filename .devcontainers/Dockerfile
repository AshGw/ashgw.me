FROM ashgw/node:latest

# Rust 
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y \
    && echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.zshrc \ 
    && rustup default stable \ 
    && source ~/.zshrc 

# Just
RUN cargo install just 

# Need 16 as default for this project
RUN nvm install 18.17.0 && nvm use 18.17.0
