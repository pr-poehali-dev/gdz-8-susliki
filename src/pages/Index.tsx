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
        { title: 'Номер 123. Умножение дробей', solution: 'Чтобы умножить дробь на дробь, нужно умножить числитель на числитель, а знаменатель на знаменатель: 2/3 × 4/5 = 8/15' },
        { title: 'Номер 124. Деление дробей', solution: 'Чтобы разделить дробь на дробь, нужно первую дробь умножить на обратную второй: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8' },
        { title: 'Номер 125. Проценты', solution: 'Чтобы найти процент от числа, нужно умножить число на процент и разделить на 100. 15% от 200 = 200 × 15 / 100 = 30' }
      ],
      9: [
        { title: 'Номер 234. Квадратные уравнения', solution: 'x² - 5x + 6 = 0. D = b² - 4ac = 25 - 24 = 1. x₁ = (5+1)/2 = 3, x₂ = (5-1)/2 = 2' },
        { title: 'Номер 235. Системы уравнений', solution: 'Решаем методом подстановки: из первого уравнения выражаем y через x, подставляем во второе' }
      ]
    },
    algebra: {
      8: [
        { title: 'Номер 45. Линейные функции', solution: 'y = kx + b. При k > 0 функция возрастает, при k < 0 убывает. b - точка пересечения с осью y' },
        { title: 'Номер 46. Степени', solution: 'a^m × a^n = a^(m+n). Пример: 2³ × 2² = 2⁵ = 32' }
      ],
      10: [
        { title: 'Номер 156. Логарифмы', solution: 'log₂(8) = 3, так как 2³ = 8. Основное логарифмическое тождество: a^(logₐ(b)) = b' },
        { title: 'Номер 157. Тригонометрия', solution: 'sin²x + cos²x = 1. Основное тригонометрическое тождество' }
      ]
    },
    geometry: {
      9: [
        { title: 'Теорема Пифагора', solution: 'В прямоугольном треугольнике a² + b² = c², где c - гипотенуза' },
        { title: 'Площадь треугольника', solution: 'S = (a × h) / 2, где a - основание, h - высота' }
      ],
      11: [
        { title: 'Объем цилиндра', solution: 'V = πr²h, где r - радиус основания, h - высота' },
        { title: 'Площадь сферы', solution: 'S = 4πr², где r - радиус сферы' }
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