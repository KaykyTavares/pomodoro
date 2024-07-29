# Summary :book:
- [1. Introdução](#1-introduction)
- [2. Run project locally](#2-run-project-locally-whale)

# 1. Introduction :pencil:
This is a project to create a :tomato: **`pomodoro`** :tomato: web app. I'm devoloping the **`first version`** but the **`main ideia`** is **`improving`** the project in parallel **`with my skills`** or lear with others that want collaborate. So, It will be a long project :laughing:.  

# 2. Run project locally :whale:
This project was developed to run in :whale: **`Docker`** :whale:.
So, you **`must have`** the Docker properly installed in your machine :computer:. After that, follow the steps:

1. Clone the repository
    ``` bash
    git clone git@github.com:KaykyTavares/pomodoro.git
    ```
2. Change to app folder
    ``` bash
    cd app
    ```
3. Create a volume folder
    ```bash
    mkdir database/mysql/volume
    ```
4. Now, just execute the following command:
    ``` bash
    sudo docker compose up -d --build
    ```
