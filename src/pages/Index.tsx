import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Разрабатываем <span className="text-violet-600">чат-ботов</span> для вашего бизнеса под ключ
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Telegram, WhatsApp, Instagram — автоматизируйте продажи, поддержку и процессы от 30,000 ₽
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                Получить консультацию
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-violet-100 animate-scale-in hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <img 
                src="/img/ed4d54c1-e6a6-4a5c-b5d8-190dbcc9867f.jpg" 
                alt="Современное рабочее место разработчика" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 hover:bg-violet-50 p-3 rounded-lg transition-colors duration-200">
                <Icon name="Clock" className="text-violet-600" size={24} />
                <span className="text-lg font-medium">4+ года в разработке ботов</span>
              </div>
              <div className="flex items-center gap-3 hover:bg-violet-50 p-3 rounded-lg transition-colors duration-200">
                <Icon name="Users" className="text-violet-600" size={24} />
                <span className="text-lg font-medium">200+ внедренных проектов</span>
              </div>
              <div className="flex items-center gap-3 hover:bg-violet-50 p-3 rounded-lg transition-colors duration-200">
                <Icon name="MessageCircle" className="text-violet-600" size={24} />
                <span className="text-lg font-medium">Работаем с Telegram, WhatsApp, Instagram ВКонтакте</span>
              </div>
              <div className="flex items-center gap-3 hover:bg-violet-50 p-3 rounded-lg transition-colors duration-200">
                <Icon name="Database" className="text-violet-600" size={24} />
                <span className="text-lg font-medium">Отлаженная связка с CRM, Airtable, Notion и др.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">О компании</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы — команда разработчиков автоматизаторов и маркетологов. За плечами более 200 успешно внедренных чат-ботов в разных сферах: от онлайн-школ до розничной торговли. Делаем проекты под ключ — от идеи до запуска. Не используем шаблоны, только работающие решения под ваш бизнес.
              </p>
            </div>
            <div>
              <img 
                src="/img/098bda03-21c4-462c-aebb-c8e1336d3d8b.jpg" 
                alt="Команда разработчиков за работой" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Что умеет ваш будущий бот?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <Icon name="MessageSquare" className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <CardTitle className="text-xl">Отвечает на вопросы 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Автоматические ответы на частые вопросы клиентов в любое время</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <Icon name="FileText" className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <CardTitle className="text-xl">Принимает и обрабатывает заявки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Собирает контакты, заявки и автоматически передает в CRM</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <Icon name="Users2" className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <CardTitle className="text-xl">Сегментирует клиентов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Разделяет аудиторию по интересам и потребностям для таргетинга</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <Icon name="Database" className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <CardTitle className="text-xl">Подключается к Airtable, Notion, CRM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Синхронизация данных с вашими рабочими системами</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <Icon name="Gamepad2" className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <CardTitle className="text-xl">Ведет квизы, игры, опросы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Интерактивные элементы для вовлечения аудитории</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <Icon name="CreditCard" className="text-violet-600 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                <CardTitle className="text-xl">Интеграции с платежками и сервисами</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Прием платежей и интеграция с внешними сервисами</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Тарифы на разработку чат-ботов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-violet-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Старт</CardTitle>
                <p className="text-gray-600 mb-4">
                  Простой бот с автоответами и приемом заявок. Подходит для тех, кто хочет попробовать.
                </p>
                <div className="text-3xl font-bold text-violet-600">от 30,000 ₽</div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-violet-500 relative scale-105 shadow-xl animate-scale-in">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600 animate-pulse">
                Популярный
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Бизнес</CardTitle>
                <p className="text-gray-600 mb-4">
                  Продвинутый бот с воронками, чекзами, интегрированный с Airtable, CRM, рассылками.
                </p>
                <div className="text-3xl font-bold text-violet-600">от 60,000 ₽</div>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 transform hover:scale-105 transition-all duration-300">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-violet-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Проект под ключ</CardTitle>
                <p className="text-gray-600 mb-4">
                  Индивидуальный проект: сложная логика, мультивалютность, подключение для техзек, аналитика.
                </p>
                <div className="text-3xl font-bold text-violet-600">от 100,000 ₽</div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Как мы делаем ботов
          </h2>
          

          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Бесплатная консультация</h3>
                <p className="text-gray-600 text-lg">
                  Обсуждаем ваши задачи, анализируем бизнес-процессы и предлагаем оптимальное решение
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Создание прототипа</h3>
                <p className="text-gray-600 text-lg">
                  Разрабатываем логику бота, пользовательские сценарии и интерфейс
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Разработка и тестирование</h3>
                <p className="text-gray-600 text-lg">
                  Программируем бота, настраиваем интеграции и проводим тестирование
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Запуск и поддержка</h3>
                <p className="text-gray-600 text-lg">
                  Запускаем бота в работу, обучаем команду и предоставляем техподдержку
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы автоматизировать свой бизнес?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию по разработке чат-бота для вашего бизнеса
          </p>
          <Button className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;