import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const subjects = [
    {
      id: 'math',
      name: 'Математика',
      icon: 'Calculator',
      color: 'from-purple-500 to-pink-500',
      description: 'Решения задач и примеров'
    },
    {
      id: 'algebra',
      name: 'Алгебра',
      icon: 'Binary',
      color: 'from-orange-500 to-red-500',
      description: 'Уравнения и функции'
    },
    {
      id: 'geometry',
      name: 'Геометрия',
      icon: 'Triangle',
      color: 'from-blue-500 to-cyan-500',
      description: 'Фигуры и теоремы'
    }
  ];

  const classes = [8, 9, 10, 11];

  const gdz = {
    math: {
      8: [
        { 
          title: 'Номер 265. Мордкович 8 класс - Рациональные дроби', 
          solution: 'Упростите выражение: (a² - 4)/(a + 2)\n\nРешение:\n1) Разложим числитель на множители по формуле разности квадратов:\n   a² - 4 = (a - 2)(a + 2)\n\n2) Подставим в дробь:\n   (a - 2)(a + 2)/(a + 2)\n\n3) Сократим на (a + 2):\n   Ответ: a - 2' 
        },
        { 
          title: 'Номер 312. Мордкович 8 класс - Квадратные корни', 
          solution: 'Вычислите: √144 + √81 - √49\n\nРешение:\n1) √144 = 12 (так как 12² = 144)\n2) √81 = 9 (так как 9² = 81)\n3) √49 = 7 (так как 7² = 49)\n4) 12 + 9 - 7 = 14\n\nОтвет: 14' 
        },
        { 
          title: 'Номер 428. Мордкович 8 класс - Квадратные уравнения', 
          solution: 'Решите уравнение: x² - 7x + 12 = 0\n\nРешение:\n1) Найдем дискриминант: D = b² - 4ac\n   D = (-7)² - 4·1·12 = 49 - 48 = 1\n\n2) D > 0, значит два корня:\n   x₁ = (7 + √1)/2 = (7 + 1)/2 = 4\n   x₂ = (7 - √1)/2 = (7 - 1)/2 = 3\n\nОтвет: x₁ = 4, x₂ = 3' 
        },
        { 
          title: 'Номер 534. Мордкович 8 класс - Неравенства', 
          solution: 'Решите неравенство: 3x - 5 > 10\n\nРешение:\n1) Перенесем -5 в правую часть:\n   3x > 10 + 5\n   3x > 15\n\n2) Разделим обе части на 3:\n   x > 5\n\nОтвет: x ∈ (5; +∞)' 
        },
        { 
          title: 'Номер 678. Мордкович 8 класс - Степени', 
          solution: 'Упростите: (2³)² · 2⁴\n\nРешение:\n1) Применим правило степени в степени:\n   (2³)² = 2³·² = 2⁶\n\n2) Применим правило умножения степеней с одинаковым основанием:\n   2⁶ · 2⁴ = 2⁶⁺⁴ = 2¹⁰\n\n3) Вычислим:\n   2¹⁰ = 1024\n\nОтвет: 1024' 
        }
      ],
      9: [
        { 
          title: 'Номер 156. Мордкович 9 класс - Функции', 
          solution: 'Постройте график функции y = x² - 4x + 3\n\nРешение:\n1) Найдем вершину параболы:\n   x₀ = -b/2a = 4/2 = 2\n   y₀ = 2² - 4·2 + 3 = 4 - 8 + 3 = -1\n   Вершина: (2; -1)\n\n2) Найдем точки пересечения с осью x:\n   x² - 4x + 3 = 0\n   D = 16 - 12 = 4\n   x₁ = 3, x₂ = 1\n\n3) Парабола ветвями вверх, проходит через точки (1;0), (2;-1), (3;0)' 
        },
        { 
          title: 'Номер 289. Мордкович 9 класс - Прогрессии', 
          solution: 'Найдите сумму первых 10 членов арифметической прогрессии, если a₁ = 3, d = 2\n\nРешение:\n1) Формула суммы: Sₙ = (2a₁ + d(n-1))·n/2\n\n2) Подставим значения:\n   S₁₀ = (2·3 + 2·9)·10/2\n   S₁₀ = (6 + 18)·5\n   S₁₀ = 24·5 = 120\n\nОтвет: 120' 
        }
      ],
      10: [
        { title: 'Номер 234. Алимов 10 класс - Тригонометрия', solution: 'Решите уравнение: sin(x) = 1/2\n\nРешение:\nx = (-1)ⁿ·arcsin(1/2) + πn, n ∈ Z\nx = (-1)ⁿ·π/6 + πn, n ∈ Z\n\nОтвет: x = π/6 + 2πn или x = 5π/6 + 2πn, n ∈ Z' }
      ],
      11: [
        { title: 'Номер 412. Алимов 11 класс - Производные', solution: 'Найдите производную функции: f(x) = 3x² - 5x + 2\n\nРешение:\nf\'(x) = (3x²)\' - (5x)\' + (2)\'\nf\'(x) = 6x - 5 + 0\nf\'(x) = 6x - 5\n\nОтвет: f\'(x) = 6x - 5' }
      ]
    },
    algebra: {
      8: [
        { 
          title: 'Номер 127. Макарычев 8 класс - Алгебраические дроби', 
          solution: 'Сократите дробь: (x² - 9)/(x² + 6x + 9)\n\nРешение:\n1) Разложим числитель по формуле разности квадратов:\n   x² - 9 = (x - 3)(x + 3)\n\n2) Разложим знаменатель по формуле квадрата суммы:\n   x² + 6x + 9 = (x + 3)²\n\n3) Получаем:\n   (x - 3)(x + 3)/(x + 3)² = (x - 3)/(x + 3)\n\nОтвет: (x - 3)/(x + 3)' 
        },
        { 
          title: 'Номер 245. Макарычев 8 класс - Действительные числа', 
          solution: 'Сравните числа: √50 и 7\n\nРешение:\n1) Возведем оба числа в квадрат:\n   (√50)² = 50\n   7² = 49\n\n2) 50 > 49, следовательно √50 > 7\n\nОтвет: √50 > 7' 
        },
        { 
          title: 'Номер 389. Макарычев 8 класс - Квадратные уравнения', 
          solution: 'Решите уравнение: 2x² + 5x - 3 = 0\n\nРешение:\n1) a = 2, b = 5, c = -3\n   D = b² - 4ac = 25 - 4·2·(-3) = 25 + 24 = 49\n\n2) D > 0, два различных корня:\n   x₁ = (-5 + 7)/4 = 2/4 = 0,5\n   x₂ = (-5 - 7)/4 = -12/4 = -3\n\nОтвет: x₁ = 0,5; x₂ = -3' 
        },
        { 
          title: 'Номер 512. Макарычев 8 класс - Неравенства', 
          solution: 'Решите систему неравенств:\n{2x + 3 > 7\n{x - 1 < 5\n\nРешение:\n1) Решим первое неравенство:\n   2x + 3 > 7\n   2x > 4\n   x > 2\n\n2) Решим второе неравенство:\n   x - 1 < 5\n   x < 6\n\n3) Найдем пересечение решений:\n   x ∈ (2; 6)\n\nОтвет: x ∈ (2; 6)' 
        }
      ],
      9: [
        { 
          title: 'Номер 178. Макарычев 9 класс - Квадратичная функция', 
          solution: 'Найдите наименьшее значение функции y = x² - 6x + 5\n\nРешение:\n1) Это парабола с ветвями вверх (a = 1 > 0)\n   Наименьшее значение в вершине\n\n2) x₀ = -b/2a = 6/2 = 3\n   y₀ = 3² - 6·3 + 5 = 9 - 18 + 5 = -4\n\nОтвет: yₘᵢₙ = -4 при x = 3' 
        }
      ],
      10: [
        { title: 'Номер 234. Колмогоров 10 класс - Логарифмы', solution: 'Вычислите: log₅(125)\n\nРешение:\nПусть log₅(125) = x\nТогда 5ˣ = 125\n5ˣ = 5³\nx = 3\n\nОтвет: 3' }
      ],
      11: [
        { title: 'Номер 567. Колмогоров 11 класс - Интегралы', solution: 'Вычислите определенный интеграл: ∫₁³ 2x dx\n\nРешение:\n∫ 2x dx = x²\nПрименим формулу Ньютона-Лейбница:\n[x²]₁³ = 3² - 1² = 9 - 1 = 8\n\nОтвет: 8' }
      ]
    },
    geometry: {
      8: [
        { 
          title: 'Задача 376. Атанасян 8 класс - Площадь параллелограмма', 
          solution: 'Найдите площадь параллелограмма, если его основание равно 12 см, а высота 8 см.\n\nРешение:\n1) Формула площади параллелограмма: S = a · h\n   где a - основание, h - высота\n\n2) S = 12 · 8 = 96 см²\n\nОтвет: 96 см²' 
        },
        { 
          title: 'Задача 468. Атанасян 8 класс - Теорема Пифагора', 
          solution: 'В прямоугольном треугольнике катеты равны 6 см и 8 см. Найдите гипотенузу.\n\nРешение:\n1) По теореме Пифагора: c² = a² + b²\n   c² = 6² + 8²\n   c² = 36 + 64 = 100\n\n2) c = √100 = 10 см\n\nОтвет: 10 см' 
        },
        { 
          title: 'Задача 512. Атанасян 8 класс - Подобные треугольники', 
          solution: 'Стороны треугольника равны 6, 8 и 10 см. Найдите стороны подобного ему треугольника с коэффициентом подобия k = 2.\n\nРешение:\n1) При подобии с коэффициентом k = 2, все стороны увеличиваются в 2 раза:\n   a₁ = 6 · 2 = 12 см\n   b₁ = 8 · 2 = 16 см\n   c₁ = 10 · 2 = 20 см\n\nОтвет: 12 см, 16 см, 20 см' 
        },
        { 
          title: 'Задача 634. Атанасян 8 класс - Площадь трапеции', 
          solution: 'Найдите площадь трапеции с основаниями 8 см и 12 см и высотой 5 см.\n\nРешение:\n1) Формула площади трапеции: S = ((a + b)/2) · h\n   где a и b - основания, h - высота\n\n2) S = ((8 + 12)/2) · 5 = (20/2) · 5 = 10 · 5 = 50 см²\n\nОтвет: 50 см²' 
        }
      ],
      9: [
        { 
          title: 'Задача 1015. Атанасян 9 класс - Векторы', 
          solution: 'Найдите длину вектора AB, если A(1; 2) и B(4; 6).\n\nРешение:\n1) Координаты вектора: AB = (4-1; 6-2) = (3; 4)\n\n2) Длина вектора: |AB| = √(x² + y²)\n   |AB| = √(3² + 4²) = √(9 + 16) = √25 = 5\n\nОтвет: 5' 
        },
        { 
          title: 'Задача 1056. Атанасян 9 класс - Окружность', 
          solution: 'Найдите длину окружности радиусом 7 см.\n\nРешение:\n1) Формула длины окружности: C = 2πr\n\n2) C = 2 · π · 7 = 14π ≈ 43,96 см\n\nОтвет: 14π см (или ≈ 44 см)' 
        }
      ],
      10: [
        { 
          title: 'Задача 234. Атанасян 10 класс - Параллелепипед', 
          solution: 'Найдите объем прямоугольного параллелепипеда с измерениями 3, 4 и 5 см.\n\nРешение:\n1) Формула объема: V = a · b · c\n\n2) V = 3 · 4 · 5 = 60 см³\n\nОтвет: 60 см³' 
        }
      ],
      11: [
        { 
          title: 'Задача 567. Атанасян 11 класс - Сфера', 
          solution: 'Найдите площадь поверхности сферы радиусом 5 см.\n\nРешение:\n1) Формула площади сферы: S = 4πr²\n\n2) S = 4 · π · 5² = 4 · π · 25 = 100π ≈ 314,16 см²\n\nОтвет: 100π см² (или ≈ 314 см²)' 
        }
      ]
    }
  };

  const currentGdz = selectedSubject && selectedClass 
    ? (gdz[selectedSubject as keyof typeof gdz]?.[selectedClass as keyof typeof gdz.math] || [])
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🎓</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ГДЗ Портал
            </h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => { setSelectedSubject(null); setSelectedClass(null); }}>
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" onClick={() => navigate('/contacts')}>
              <Icon name="Mail" size={20} className="mr-2" />
              Контакты
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {!selectedSubject ? (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/a6c1c5e1-dfe1-4c6e-9812-6ce2a15d415d/files/c91a5570-385b-446b-81fc-4fad7cb603e4.jpg" 
                  alt="Суслик" 
                  className="w-32 h-32 object-cover rounded-full shadow-lg animate-scale-in"
                />
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Добро пожаловать в мир знаний!
              </h2>
              <p className="text-xl text-gray-600 mb-2">Выбери предмет и получи готовые домашние задания</p>
              <p className="text-sm text-gray-500">🐿️ С поддержкой наших умных сусликов!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {subjects.map((subject, index) => (
                <Card 
                  key={subject.id}
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedSubject(subject.id)}
                >
                  <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${subject.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon name={subject.icon as any} size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{subject.name}</h3>
                        <p className="text-gray-500 text-sm">{subject.description}</p>
                      </div>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${subject.color} hover:opacity-90 transition-opacity`}>
                      Выбрать предмет
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-2xl">🐿️</span>
                <span className="text-gray-600">Суслик помогает тебе учиться!</span>
              </div>
            </div>
          </div>
        ) : !selectedClass ? (
          <div className="animate-fade-in">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedSubject(null)}
              className="mb-6"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к предметам
            </Button>

            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${subjects.find(s => s.id === selectedSubject)?.color} inline-block shadow-xl`}>
                  <Icon name={subjects.find(s => s.id === selectedSubject)?.icon as any} size={48} className="text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-2">{subjects.find(s => s.id === selectedSubject)?.name}</h2>
              <p className="text-xl text-gray-600 mb-4">Выбери свой класс</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🐿️</span>
                <span className="text-sm text-gray-500">Суслик уже ждёт!</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {classes.map((cls, index) => (
                <Card 
                  key={cls}
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedClass(cls)}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`text-5xl font-bold bg-gradient-to-br ${subjects.find(s => s.id === selectedSubject)?.color} bg-clip-text text-transparent mb-2`}>
                      {cls}
                    </div>
                    <p className="text-gray-600 font-semibold">класс</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedClass(null)}
              className="mb-6"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к классам
            </Button>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/a6c1c5e1-dfe1-4c6e-9812-6ce2a15d415d/files/c91a5570-385b-446b-81fc-4fad7cb603e4.jpg" 
                  alt="Суслик помощник" 
                  className="w-16 h-16 object-cover rounded-full shadow-md"
                />
                <div>
                  <h2 className="text-3xl font-bold">
                    {subjects.find(s => s.id === selectedSubject)?.name} - {selectedClass} класс
                  </h2>
                  <p className="text-gray-600">Готовые домашние задания с решениями</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className={`bg-gradient-to-r ${subjects.find(s => s.id === selectedSubject)?.color} text-white`}>
                  {subjects.find(s => s.id === selectedSubject)?.name}
                </Badge>
                <Badge variant="secondary">{selectedClass} класс</Badge>
                <Badge variant="outline">
                  <Icon name="BookOpen" size={14} className="mr-1" />
                  {currentGdz.length} заданий
                </Badge>
              </div>
            </div>

            {currentGdz.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {currentGdz.map((task, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${subjects.find(s => s.id === selectedSubject)?.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {index + 1}
                        </div>
                        <span className="font-semibold text-lg">{task.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-gray-50">
                      <div className="flex gap-3">
                        <div className="text-2xl flex-shrink-0">🐿️</div>
                        <div>
                          <p className="text-sm text-gray-500 mb-2 font-semibold">Решение от суслика:</p>
                          <p className="text-gray-700 leading-relaxed">{task.solution}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🐿️</div>
                <h3 className="text-2xl font-bold mb-2">Суслик еще работает над этим разделом</h3>
                <p className="text-gray-600">Скоро здесь появятся готовые домашние задания</p>
              </Card>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white/80 backdrop-blur-md mt-20 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 items-center mb-4">
            <span className="text-3xl">🐿️</span>
            <p className="text-gray-600">Учись с удовольствием вместе с сусликами!</p>
            <span className="text-3xl">🐿️</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 ГДЗ Портал. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;