CREATE TABLE Person (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_time TIMESTAMP NOT NULL
);

CREATE TABLE Project (
    id INT PRIMARY KEY AUTO_INCREMENT,
    created_time TIMESTAMP NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES Person(id)
);

CREATE TABLE Task (
    id INT PRIMARY KEY AUTO_INCREMENT,
    created_time TIMESTAMP NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    project_id INT,
    person_id INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES Project(id),
    FOREIGN KEY (person_id) REFERENCES Person(id)
);

CREATE TABLE Pomodoro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status BOOLEAN NOT NULL,
    created_time TIMESTAMP NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    person_id INT NOT NULL,
    task_id INT,
    FOREIGN KEY (person_id) REFERENCES Person(id),
    FOREIGN KEY (task_id) REFERENCES Task(id)
);

CREATE TABLE Tracking (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status BOOLEAN NOT NULL,
    tracking_type VARCHAR(20) CHECK (tracking_type IN ('REST', 'FOCUS', 'LONG_REST')),
    created_time TIMESTAMP,
    pomodoro_id INT NOT NULL,
    FOREIGN KEY (pomodoro_id) REFERENCES Pomodoro(id),
);
