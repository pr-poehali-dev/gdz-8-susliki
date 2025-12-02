import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Task {
  id: number;
  task_number: number;
  textbook: string;
  title: string;
  solution: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    if (selectedSubject && selectedClass) {
      fetchTasks();
    }
  }, [selectedSubject, selectedClass]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = tasks.filter(task => 
        task.task_number.toString().includes(searchQuery) ||
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.textbook.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [searchQuery, tasks]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://functions.poehali.dev/b744af6f-61f8-41f1-822b-33c65bf9975c?subject=${selectedSubject}&class=${selectedClass}`
      );
      const data = await response.json();
      setTasks(data.tasks || []);
      setFilteredTasks(data.tasks || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const currentSubject = subjects.find(s => s.id === selectedSubject);

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
            <Button variant="ghost" onClick={() => { setSelectedSubject(null); setSelectedClass(null); setSearchQuery(''); }}>
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
              <p className="text-sm text-gray-500">🐿️ С поддержкой наших умных сусликов! Более 1000 решений!</p>
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
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentSubject?.color} inline-block shadow-xl`}>
                  <Icon name={currentSubject?.icon as any} size={48} className="text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-2">{currentSubject?.name}</h2>
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
                    <div className={`text-5xl font-bold bg-gradient-to-br ${currentSubject?.color} bg-clip-text text-transparent mb-2`}>
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
              onClick={() => { setSelectedClass(null); setSearchQuery(''); }}
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
                    {currentSubject?.name} - {selectedClass} класс
                  </h2>
                  <p className="text-gray-600">Готовые домашние задания с решениями</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={`bg-gradient-to-r ${currentSubject?.color} text-white`}>
                  {currentSubject?.name}
                </Badge>
                <Badge variant="secondary">{selectedClass} класс</Badge>
                <Badge variant="outline">
                  <Icon name="BookOpen" size={14} className="mr-1" />
                  {filteredTasks.length} заданий
                </Badge>
              </div>

              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Поиск по номеру, названию или учебнику..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 focus:border-purple-500"
                />
              </div>
            </div>

            {loading ? (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4 animate-bounce">🐿️</div>
                <h3 className="text-2xl font-bold mb-2">Суслик загружает задания...</h3>
                <p className="text-gray-600">Подожди немножко!</p>
              </Card>
            ) : filteredTasks.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredTasks.map((task, index) => (
                  <AccordionItem 
                    key={task.id} 
                    value={`item-${task.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3 text-left w-full">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${currentSubject?.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {task.task_number}
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-lg block">{task.title}</span>
                          <span className="text-sm text-gray-500">{task.textbook} • Номер {task.task_number}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-gray-50">
                      <div className="flex gap-3">
                        <div className="text-2xl flex-shrink-0">🐿️</div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 mb-2 font-semibold">Решение от суслика:</p>
                          <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{task.solution}</pre>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🐿️</div>
                <h3 className="text-2xl font-bold mb-2">
                  {searchQuery ? 'Ничего не найдено' : 'Суслик еще работает над этим разделом'}
                </h3>
                <p className="text-gray-600">
                  {searchQuery ? 'Попробуй другой запрос' : 'Скоро здесь появятся готовые домашние задания'}
                </p>
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
          <p className="text-sm text-gray-500">© 2024 ГДЗ Портал. Все права защищены. Более 1000 решений!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
