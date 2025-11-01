import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('warehouses');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A1F2C 100%)' }}>
        <Card className="w-full max-w-md p-8 space-y-6 animate-scale-in bg-[#1A1F2C] border-[#2A2F3C]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FDB022] rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-[#0F1419]" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-white">enot.</h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Вход в систему</h2>
            <p className="text-sm text-gray-400">Войдите в панель управления кассами</p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-[#0F1419] border-[#2A2F3C] text-white placeholder:text-gray-500"
              />
              <Input 
                type="password" 
                placeholder="Пароль" 
                className="bg-[#0F1419] border-[#2A2F3C] text-white placeholder:text-gray-500"
              />
            </div>
            <Button 
              className="w-full bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#0F1419] font-semibold"
              onClick={() => setIsLoggedIn(true)}
            >
              Войти
            </Button>
            <p className="text-xs text-gray-400 text-center">
              Забыли пароль? <span className="text-[#FDB022] cursor-pointer hover:underline">Восстановить</span>
            </p>
          </div>
        </Card>
      </div>
    );
  }

  const warehouses = [
    { id: 'youkey.key.shop', domain: 'youkey.key.shop', status: 'На модерации', badge: 'Y', bgColor: '#FDB022', textColor: '#0F1419' },
    { id: 'ozohelper', domain: 'ozohelper.key.shop/', status: 'Отключена', badge: 'O', bgColor: '#1A1F2C', textColor: '#FDB022' },
    { id: 'megastore', domain: 'megastore.key.shop/', status: 'Активна', badge: 'M', bgColor: '#FDB022', textColor: '#0F1419' },
    { id: 'techshop', domain: 'techshop.key.shop/', status: 'Активна', badge: 'T', bgColor: '#FDB022', textColor: '#0F1419' },
  ];

  const transactions = [
    { id: '#TX-4891', user: 'Иван Петров', warehouse: 'youkey.key.shop', amount: '12,500 ₽', date: '2 ноя, 14:32', status: 'Завершено' },
    { id: '#TX-4890', user: 'Мария Сидорова', warehouse: 'megastore', amount: '8,300 ₽', date: '2 ноя, 13:15', status: 'Завершено' },
    { id: '#TX-4889', user: 'Алексей Иванов', warehouse: 'techshop', amount: '15,700 ₽', date: '2 ноя, 12:48', status: 'В обработке' },
    { id: '#TX-4888', user: 'Елена Кузнецова', warehouse: 'ozohelper', amount: '6,200 ₽', date: '2 ноя, 11:22', status: 'Завершено' },
    { id: '#TX-4887', user: 'Дмитрий Смирнов', warehouse: 'youkey.key.shop', amount: '9,800 ₽', date: '2 ноя, 10:15', status: 'Завершено' },
  ];

  const users = [
    { id: 'USR-001', name: 'Иван Петров', email: 'ivan@example.com', role: 'Администратор', registeredAt: '15 окт, 2024', purchases: 24 },
    { id: 'USR-002', name: 'Мария Сидорова', email: 'maria@example.com', role: 'Пользователь', registeredAt: '18 окт, 2024', purchases: 12 },
    { id: 'USR-003', name: 'Алексей Иванов', email: 'alex@example.com', role: 'Модератор', registeredAt: '20 окт, 2024', purchases: 8 },
    { id: 'USR-004', name: 'Елена Кузнецова', email: 'elena@example.com', role: 'Пользователь', registeredAt: '22 окт, 2024', purchases: 15 },
  ];

  const keyAttempts = [
    { id: 'ATT-891', key: 'XXXX-XXXX-A8B2', user: 'ivan@example.com', product: 'Windows 11 Pro', attempt: 1, date: '2 ноя, 14:32', status: 'Успешно' },
    { id: 'ATT-890', key: 'XXXX-XXXX-C9D1', user: 'maria@example.com', product: 'Office 365', attempt: 3, date: '2 ноя, 13:28', status: 'Неудача' },
    { id: 'ATT-889', key: 'XXXX-XXXX-E4F5', user: 'alex@example.com', product: 'Adobe CC', attempt: 1, date: '2 ноя, 12:15', status: 'Успешно' },
  ];

  const keys = [
    { id: 'KEY-001', key: 'XXXX-XXXX-A8B2', product: 'Windows 11 Pro', warehouse: 'youkey.key.shop', activations: 3, maxActivations: 5, createdAt: '1 ноя, 2024', status: 'Активен' },
    { id: 'KEY-002', key: 'XXXX-XXXX-C9D1', product: 'Office 365', warehouse: 'megastore', activations: 1, maxActivations: 1, createdAt: '1 ноя, 2024', status: 'Использован' },
    { id: 'KEY-003', key: 'XXXX-XXXX-E4F5', product: 'Adobe CC', warehouse: 'techshop', activations: 0, maxActivations: 3, createdAt: '2 ноя, 2024', status: 'Новый' },
  ];

  const changeRequests = [
    { id: 'CHG-101', user: 'ivan@example.com', requestType: 'Замена ключа', oldKey: 'XXXX-A8B2', newKey: 'XXXX-B9C3', reason: 'Не активируется', date: '2 ноя, 14:00', status: 'В обработке' },
    { id: 'CHG-100', user: 'maria@example.com', requestType: 'Возврат средств', oldKey: 'XXXX-C9D1', newKey: '-', reason: 'Передумала', date: '2 ноя, 11:30', status: 'Одобрено' },
  ];

  const proxies = [
    { id: 'PRX-001', ip: '45.142.122.34:8080', country: 'РФ', type: 'HTTP', status: 'Активен', uptime: 99.8, users: 12 },
    { id: 'PRX-002', ip: '178.20.44.156:3128', country: 'США', type: 'SOCKS5', status: 'Активен', uptime: 98.5, users: 8 },
    { id: 'PRX-003', ip: '91.234.56.78:1080', country: 'ЕС', type: 'HTTP', status: 'Недоступен', uptime: 0, users: 0 },
  ];

  const menuItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'warehouses', label: 'Кассы', icon: 'Package' },
    { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' },
    { id: 'transactions', label: 'Транзакции', icon: 'ArrowRightLeft' },
    { id: 'withdrawals', label: 'Выплаты', icon: 'Wallet' },
    { id: 'users', label: 'Пользователи', icon: 'Users' },
    { id: 'keys', label: 'Ключи', icon: 'Key' },
    { id: 'key-attempts', label: 'Попытки активации', icon: 'Shield' },
    { id: 'change-requests', label: 'Запросы смены', icon: 'RefreshCw' },
    { id: 'proxy', label: 'Прокси', icon: 'Globe' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      <nav className="border-b border-[#2A2F3C] bg-[#1A1F2C]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FDB022] rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-[#0F1419]" size={18} />
                </div>
                <h1 className="text-xl font-bold text-white">enot.</h1>
              </div>
              
              <div className="hidden lg:flex gap-1">
                {menuItems.slice(0, 5).map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-white bg-[#FDB022]/10 border-b-2 border-[#FDB022]' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#0F1419] px-3 py-1.5 rounded-lg border border-[#2A2F3C]">
                <Icon name="Wallet" size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-white">0.00 ₽</span>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-[#1A1F2C] border-r border-[#2A2F3C] hidden lg:block overflow-y-auto">
        <div className="p-4 space-y-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-[#FDB022] text-[#0F1419]'
                  : 'text-gray-400 hover:text-white hover:bg-[#0F1419]'
              }`}
            >
              <Icon name={item.icon as any} size={18} />
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      <main className="lg:ml-64 max-w-[1400px] mx-auto px-6 py-8 mt-16">
        {activeSection === 'main' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Главная</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Активные кассы', value: '24', trend: '+12%', icon: 'Package' },
                { label: 'Пользователей', value: '1,834', trend: '+8%', icon: 'Users' },
                { label: 'Транзакций сегодня', value: '892', trend: '+23%', icon: 'ArrowRightLeft' },
                { label: 'Доход за месяц', value: '2.4M ₽', trend: '+15%', icon: 'TrendingUp' },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 bg-[#1A1F2C] border-[#2A2F3C] hover-scale cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-[#FDB022]/10 rounded-lg flex items-center justify-center">
                      <Icon name={stat.icon as any} className="text-[#FDB022]" size={20} />
                    </div>
                    <Badge className="bg-green-500/10 text-green-400 border-0 text-xs">
                      {stat.trend}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'warehouses' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Кассы</h2>
              <Button className="bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#0F1419] font-semibold">
                <Icon name="Plus" size={16} className="mr-2" />
                Подключить кассу
              </Button>
            </div>
            
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-4 top-3.5 text-gray-500" />
              <Input 
                placeholder="Найти кассу по ID, названию, домену" 
                className="pl-12 bg-[#1A1F2C] border-[#2A2F3C] text-white placeholder:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warehouses.map(wh => (
                <Card key={wh.id} className="p-6 bg-[#1A1F2C] border-[#2A2F3C] hover-scale cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: wh.bgColor, color: wh.textColor }}
                    >
                      {wh.badge}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{wh.id}</h3>
                      <p className="text-sm text-gray-400 mb-2">{wh.domain}</p>
                      <Badge 
                        className={`text-xs border-0 ${
                          wh.status === 'Активна' ? 'bg-green-500/10 text-green-400' :
                          wh.status === 'На модерации' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {wh.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'analytics' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Аналитика</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-[#1A1F2C] border-[#2A2F3C]">
                <h3 className="text-lg font-semibold text-white mb-4">Продажи по кассам</h3>
                <div className="space-y-4">
                  {warehouses.map((wh, idx) => (
                    <div key={wh.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{wh.id}</span>
                        <span className="text-white font-medium">{[45, 23, 78, 56][idx]}%</span>
                      </div>
                      <Progress value={[45, 23, 78, 56][idx]} className="h-2 bg-[#0F1419]" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-[#1A1F2C] border-[#2A2F3C]">
                <h3 className="text-lg font-semibold text-white mb-4">Топ продуктов</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Windows 11 Pro', sales: 324, revenue: '486K ₽' },
                    { name: 'Office 365', sales: 198, revenue: '297K ₽' },
                    { name: 'Adobe Creative Cloud', sales: 156, revenue: '234K ₽' },
                    { name: 'Антивирус Kaspersky', sales: 89, revenue: '133K ₽' },
                  ].map(product => (
                    <div key={product.name} className="flex items-center justify-between p-3 bg-[#0F1419] rounded-lg">
                      <div>
                        <p className="font-medium text-white text-sm">{product.name}</p>
                        <p className="text-xs text-gray-400">{product.sales} продаж</p>
                      </div>
                      <span className="font-semibold text-[#FDB022]">{product.revenue}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'transactions' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Транзакции</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-[#1A1F2C] border border-[#2A2F3C]">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#FDB022] data-[state=active]:text-[#0F1419]">Все</TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-[#FDB022] data-[state=active]:text-[#0F1419]">Завершенные</TabsTrigger>
                <TabsTrigger value="processing" className="data-[state=active]:bg-[#FDB022] data-[state=active]:text-[#0F1419]">В обработке</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-[#2A2F3C] hover:bg-transparent">
                        <TableHead className="text-gray-400">ID</TableHead>
                        <TableHead className="text-gray-400">Пользователь</TableHead>
                        <TableHead className="text-gray-400">Касса</TableHead>
                        <TableHead className="text-gray-400">Сумма</TableHead>
                        <TableHead className="text-gray-400">Дата</TableHead>
                        <TableHead className="text-gray-400">Статус</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map(tx => (
                        <TableRow key={tx.id} className="border-[#2A2F3C] hover:bg-[#0F1419]">
                          <TableCell className="font-mono text-sm text-gray-400">{tx.id}</TableCell>
                          <TableCell className="text-white">{tx.user}</TableCell>
                          <TableCell className="text-gray-400 text-sm">{tx.warehouse}</TableCell>
                          <TableCell className="font-semibold text-white">{tx.amount}</TableCell>
                          <TableCell className="text-gray-400 text-sm">{tx.date}</TableCell>
                          <TableCell>
                            <Badge 
                              className={`border-0 ${
                                tx.status === 'Завершено' 
                                  ? 'bg-green-500/10 text-green-400' 
                                  : 'bg-yellow-500/10 text-yellow-400'
                              }`}
                            >
                              {tx.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'users' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Пользователи</h2>
              <Button className="bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#0F1419] font-semibold">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Добавить пользователя
              </Button>
            </div>
            
            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2A2F3C] hover:bg-transparent">
                    <TableHead className="text-gray-400">ID</TableHead>
                    <TableHead className="text-gray-400">Имя</TableHead>
                    <TableHead className="text-gray-400">Email</TableHead>
                    <TableHead className="text-gray-400">Роль</TableHead>
                    <TableHead className="text-gray-400">Регистрация</TableHead>
                    <TableHead className="text-gray-400">Покупки</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id} className="border-[#2A2F3C] hover:bg-[#0F1419]">
                      <TableCell className="font-mono text-sm text-gray-400">{user.id}</TableCell>
                      <TableCell className="text-white font-medium">{user.name}</TableCell>
                      <TableCell className="text-gray-400">{user.email}</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-500/10 text-blue-400 border-0">{user.role}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-400 text-sm">{user.registeredAt}</TableCell>
                      <TableCell className="text-white font-medium">{user.purchases}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {activeSection === 'keys' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Ключи активации</h2>
              <Button className="bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#0F1419] font-semibold">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить ключ
              </Button>
            </div>
            
            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2A2F3C] hover:bg-transparent">
                    <TableHead className="text-gray-400">ID</TableHead>
                    <TableHead className="text-gray-400">Ключ</TableHead>
                    <TableHead className="text-gray-400">Продукт</TableHead>
                    <TableHead className="text-gray-400">Касса</TableHead>
                    <TableHead className="text-gray-400">Активации</TableHead>
                    <TableHead className="text-gray-400">Создан</TableHead>
                    <TableHead className="text-gray-400">Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keys.map(key => (
                    <TableRow key={key.id} className="border-[#2A2F3C] hover:bg-[#0F1419]">
                      <TableCell className="font-mono text-sm text-gray-400">{key.id}</TableCell>
                      <TableCell className="font-mono text-white text-sm">{key.key}</TableCell>
                      <TableCell className="text-white">{key.product}</TableCell>
                      <TableCell className="text-gray-400 text-sm">{key.warehouse}</TableCell>
                      <TableCell className="text-white">
                        {key.activations}/{key.maxActivations}
                        <Progress value={(key.activations / key.maxActivations) * 100} className="h-1 mt-1 bg-[#0F1419]" />
                      </TableCell>
                      <TableCell className="text-gray-400 text-sm">{key.createdAt}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`border-0 ${
                            key.status === 'Активен' ? 'bg-green-500/10 text-green-400' :
                            key.status === 'Использован' ? 'bg-gray-500/10 text-gray-400' :
                            'bg-blue-500/10 text-blue-400'
                          }`}
                        >
                          {key.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {activeSection === 'key-attempts' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Попытки активации ключей</h2>
            
            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2A2F3C] hover:bg-transparent">
                    <TableHead className="text-gray-400">ID</TableHead>
                    <TableHead className="text-gray-400">Ключ</TableHead>
                    <TableHead className="text-gray-400">Пользователь</TableHead>
                    <TableHead className="text-gray-400">Продукт</TableHead>
                    <TableHead className="text-gray-400">Попытка №</TableHead>
                    <TableHead className="text-gray-400">Дата</TableHead>
                    <TableHead className="text-gray-400">Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keyAttempts.map(att => (
                    <TableRow key={att.id} className="border-[#2A2F3C] hover:bg-[#0F1419]">
                      <TableCell className="font-mono text-sm text-gray-400">{att.id}</TableCell>
                      <TableCell className="font-mono text-white text-sm">{att.key}</TableCell>
                      <TableCell className="text-gray-400">{att.user}</TableCell>
                      <TableCell className="text-white">{att.product}</TableCell>
                      <TableCell className="text-white">{att.attempt}</TableCell>
                      <TableCell className="text-gray-400 text-sm">{att.date}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`border-0 ${
                            att.status === 'Успешно' 
                              ? 'bg-green-500/10 text-green-400' 
                              : 'bg-red-500/10 text-red-400'
                          }`}
                        >
                          {att.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {activeSection === 'change-requests' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Запросы на смену ключей</h2>
            
            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2A2F3C] hover:bg-transparent">
                    <TableHead className="text-gray-400">ID</TableHead>
                    <TableHead className="text-gray-400">Пользователь</TableHead>
                    <TableHead className="text-gray-400">Тип запроса</TableHead>
                    <TableHead className="text-gray-400">Старый ключ</TableHead>
                    <TableHead className="text-gray-400">Новый ключ</TableHead>
                    <TableHead className="text-gray-400">Причина</TableHead>
                    <TableHead className="text-gray-400">Дата</TableHead>
                    <TableHead className="text-gray-400">Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {changeRequests.map(req => (
                    <TableRow key={req.id} className="border-[#2A2F3C] hover:bg-[#0F1419]">
                      <TableCell className="font-mono text-sm text-gray-400">{req.id}</TableCell>
                      <TableCell className="text-gray-400">{req.user}</TableCell>
                      <TableCell className="text-white">{req.requestType}</TableCell>
                      <TableCell className="font-mono text-sm text-gray-400">{req.oldKey}</TableCell>
                      <TableCell className="font-mono text-sm text-white">{req.newKey}</TableCell>
                      <TableCell className="text-gray-400 text-sm">{req.reason}</TableCell>
                      <TableCell className="text-gray-400 text-sm">{req.date}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`border-0 ${
                            req.status === 'Одобрено' ? 'bg-green-500/10 text-green-400' :
                            req.status === 'Отклонено' ? 'bg-red-500/10 text-red-400' :
                            'bg-yellow-500/10 text-yellow-400'
                          }`}
                        >
                          {req.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {activeSection === 'proxy' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Прокси-серверы</h2>
              <Button className="bg-[#FDB022] hover:bg-[#FDB022]/90 text-[#0F1419] font-semibold">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить прокси
              </Button>
            </div>
            
            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2A2F3C] hover:bg-transparent">
                    <TableHead className="text-gray-400">ID</TableHead>
                    <TableHead className="text-gray-400">IP:Порт</TableHead>
                    <TableHead className="text-gray-400">Страна</TableHead>
                    <TableHead className="text-gray-400">Тип</TableHead>
                    <TableHead className="text-gray-400">Uptime</TableHead>
                    <TableHead className="text-gray-400">Пользователей</TableHead>
                    <TableHead className="text-gray-400">Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {proxies.map(proxy => (
                    <TableRow key={proxy.id} className="border-[#2A2F3C] hover:bg-[#0F1419]">
                      <TableCell className="font-mono text-sm text-gray-400">{proxy.id}</TableCell>
                      <TableCell className="font-mono text-white text-sm">{proxy.ip}</TableCell>
                      <TableCell className="text-white">{proxy.country}</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-500/10 text-purple-400 border-0">{proxy.type}</Badge>
                      </TableCell>
                      <TableCell className="text-white">{proxy.uptime}%</TableCell>
                      <TableCell className="text-white">{proxy.users}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`border-0 ${
                            proxy.status === 'Активен' 
                              ? 'bg-green-500/10 text-green-400' 
                              : 'bg-red-500/10 text-red-400'
                          }`}
                        >
                          {proxy.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {activeSection === 'withdrawals' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Выплаты</h2>
            <Card className="p-6 bg-[#1A1F2C] border-[#2A2F3C]">
              <div className="text-center py-12">
                <Icon name="Wallet" size={48} className="mx-auto text-gray-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Управление выплатами</h3>
                <p className="text-gray-400">Раздел находится в разработке</p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'settings' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white">Настройки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Общие настройки', icon: 'Settings', desc: 'Конфигурация системы' },
                { title: 'Безопасность', icon: 'Shield', desc: 'Настройки безопасности' },
                { title: 'Уведомления', icon: 'Bell', desc: 'Управление уведомлениями' },
                { title: 'Интеграции', icon: 'Plug', desc: 'API и интеграции' },
              ].map(setting => (
                <Card key={setting.title} className="p-6 bg-[#1A1F2C] border-[#2A2F3C] hover-scale cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FDB022]/10 rounded-lg flex items-center justify-center">
                      <Icon name={setting.icon as any} size={24} className="text-[#FDB022]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{setting.title}</h3>
                      <p className="text-sm text-gray-400">{setting.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;