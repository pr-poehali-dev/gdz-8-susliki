import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
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
            <Button variant="ghost" onClick={() => window.location.href = '/'}>
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost">
              <Icon name="Mail" size={20} className="mr-2" />
              Контакты
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/a6c1c5e1-dfe1-4c6e-9812-6ce2a15d415d/files/c91a5570-385b-446b-81fc-4fad7cb603e4.jpg" 
                alt="Суслик" 
                className="w-32 h-32 object-cover rounded-full shadow-lg animate-scale-in"
              />
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Свяжись с нами!
            </h2>
            <p className="text-xl text-gray-600">🐿️ Суслики всегда рады помочь тебе</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="animate-slide-in-up hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <Icon name="Mail" size={24} />
                  </div>
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">support@gdzportal.ru</p>
                <p className="text-sm text-gray-500 mt-2">Ответим в течение 24 часов 🐿️</p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                    <Icon name="Phone" size={24} />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+7 (800) 123-45-67</p>
                <p className="text-sm text-gray-500 mt-2">Звони с 9:00 до 21:00 🐿️</p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <CardTitle>Telegram</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">@gdzportal_bot</p>
                <p className="text-sm text-gray-500 mt-2">Быстрые ответы в мессенджере 🐿️</p>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-up hover:shadow-xl transition-shadow" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                    <Icon name="Clock" size={24} />
                  </div>
                  <CardTitle>Режим работы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ежедневно 9:00 - 21:00</p>
                <p className="text-sm text-gray-500 mt-2">Суслики не спят! 🐿️</p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🐿️</span>
                <CardTitle className="text-2xl">Напиши нам сообщение</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Твоё имя</label>
                <Input placeholder="Иван Иванов" className="border-2 focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <Input type="email" placeholder="ivan@example.com" className="border-2 focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение</label>
                <Textarea 
                  placeholder="Расскажи, чем мы можем помочь..." 
                  rows={6}
                  className="border-2 focus:border-purple-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
              <p className="text-center text-sm text-gray-500">
                🐿️ Суслик прочитает твоё сообщение и обязательно поможет!
              </p>
            </CardContent>
          </Card>
        </div>
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

export default Contacts;
