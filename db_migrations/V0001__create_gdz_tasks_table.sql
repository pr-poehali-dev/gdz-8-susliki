CREATE TABLE IF NOT EXISTS gdz_tasks (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(50) NOT NULL,
    class_number INTEGER NOT NULL,
    task_number INTEGER NOT NULL,
    textbook VARCHAR(100) NOT NULL,
    title TEXT NOT NULL,
    solution TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_subject_class ON gdz_tasks(subject, class_number);
CREATE INDEX idx_task_number ON gdz_tasks(task_number);

INSERT INTO gdz_tasks (subject, class_number, task_number, textbook, title, solution) VALUES
('math', 8, 265, 'Мордкович', 'Рациональные дроби', 'Упростите выражение: (a² - 4)/(a + 2)\n\nРешение:\n1) Разложим числитель на множители по формуле разности квадратов:\n   a² - 4 = (a - 2)(a + 2)\n\n2) Подставим в дробь:\n   (a - 2)(a + 2)/(a + 2)\n\n3) Сократим на (a + 2):\n   Ответ: a - 2'),
('math', 8, 312, 'Мордкович', 'Квадратные корни', 'Вычислите: √144 + √81 - √49\n\nРешение:\n1) √144 = 12 (так как 12² = 144)\n2) √81 = 9 (так как 9² = 81)\n3) √49 = 7 (так как 7² = 49)\n4) 12 + 9 - 7 = 14\n\nОтвет: 14'),
('math', 8, 428, 'Мордкович', 'Квадратные уравнения', 'Решите уравнение: x² - 7x + 12 = 0\n\nРешение:\n1) Найдем дискриминант: D = b² - 4ac\n   D = (-7)² - 4·1·12 = 49 - 48 = 1\n\n2) D > 0, значит два корня:\n   x₁ = (7 + √1)/2 = (7 + 1)/2 = 4\n   x₂ = (7 - √1)/2 = (7 - 1)/2 = 3\n\nОтвет: x₁ = 4, x₂ = 3'),
('algebra', 8, 127, 'Макарычев', 'Алгебраические дроби', 'Сократите дробь: (x² - 9)/(x² + 6x + 9)\n\nРешение:\n1) Разложим числитель по формуле разности квадратов:\n   x² - 9 = (x - 3)(x + 3)\n\n2) Разложим знаменатель по формуле квадрата суммы:\n   x² + 6x + 9 = (x + 3)²\n\n3) Получаем:\n   (x - 3)(x + 3)/(x + 3)² = (x - 3)/(x + 3)\n\nОтвет: (x - 3)/(x + 3)'),
('geometry', 8, 376, 'Атанасян', 'Площадь параллелограмма', 'Найдите площадь параллелограмма, если его основание равно 12 см, а высота 8 см.\n\nРешение:\n1) Формула площади параллелограмма: S = a · h\n   где a - основание, h - высота\n\n2) S = 12 · 8 = 96 см²\n\nОтвет: 96 см²');