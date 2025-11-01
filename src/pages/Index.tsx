import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8 space-y-6 animate-scale-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-primary-foreground" size={24} />
            </div>
            <h1 className="text-2xl font-bold">enot.</h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Вход в систему</h2>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-secondary border-border"
              />
              <Input 
                type="password" 
                placeholder="Пароль" 
                className="bg-secondary border-border"
              />
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsLoggedIn(true)}
            >
              Войти
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Забыли пароль? <span className="text-primary cursor-pointer">Восстановить</span>
            </p>
          </div>
        </Card>
      </div>
    );
  }

  const stats = [
    { label: 'Активные склады', value: '24', trend: '+12%', icon: 'Package' },
    { label: 'Пользователей', value: '1,834', trend: '+8%', icon: 'Users' },
    { label: 'Транзакций сегодня', value: '892', trend: '+23%', icon: 'ArrowRightLeft' },
    { label: 'Ключей активировано', value: '3,241', trend: '+15%', icon: 'Key' },
  ];

  const warehouses = [
    { id: 'youkey.key.shop', domain: 'youkey.key.shop', status: 'На модерации', badge: 'Y' },
    { id: 'ozohelper', domain: 'ozohelper.key.shop/', status: 'Отключена', badge: 'O' },
    { id: 'megastore', domain: 'megastore.key.shop/', status: 'Активна', badge: 'M' },
    { id: 'techshop', domain: 'techshop.key.shop/', status: 'Активна', badge: 'T' },
  ];

  const transactions = [
    { id: '#TX-4891', user: 'Иван Петров', amount: '12,500 ₽', date: '2 ноя, 14:32', status: 'Завершено' },
    { id: '#TX-4890', user: 'Мария Сидорова', amount: '8,300 ₽', date: '2 ноя, 13:15', status: 'Завершено' },
    { id: '#TX-4889', user: 'Алексей Иванов', amount: '15,700 ₽', date: '2 ноя, 12:48', status: 'В обработке' },
    { id: '#TX-4888', user: 'Елена Кузнецова', amount: '6,200 ₽', date: '2 ноя, 11:22', status: 'Завершено' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: 'LayoutDashboard' },
    { id: 'warehouses', label: 'Склады', icon: 'Package' },
    { id: 'users', label: 'Пользователи', icon: 'Users' },
    { id: 'transactions', label: 'Транзакции', icon: 'ArrowRightLeft' },
    { id: 'keys', label: 'Ключи', icon: 'Key' },
    { id: 'proxy', label: 'Прокси', icon: 'Globe' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-primary-foreground" size={20} />
                </div>
                <h1 className="text-xl font-bold">enot.</h1>
              </div>
              
              <div className="hidden md:flex gap-1">
                {menuItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary/10' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-lg">
                <Icon name="Wallet" size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium">0.00 ₽</span>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'dashboard' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Главная</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="p-6 hover-scale cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={stat.icon as any} className="text-primary" size={20} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {stat.trend}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Последние транзакции</h3>
                  <Button variant="ghost" size="sm">
                    Все <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {transactions.slice(0, 4).map(tx => (
                    <div key={tx.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{tx.user}</p>
                        <p className="text-xs text-muted-foreground">{tx.id} • {tx.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{tx.amount}</p>
                        <Badge 
                          variant={tx.status === 'Завершено' ? 'default' : 'secondary'} 
                          className="text-xs"
                        >
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Активность складов</h3>
                  <Button variant="ghost" size="sm">
                    <Icon name="Plus" size={16} className="mr-1" /> Добавить
                  </Button>
                </div>
                <div className="space-y-3">
                  {warehouses.map(wh => (
                    <div key={wh.id} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        wh.status === 'Активна' ? 'bg-primary text-primary-foreground' :
                        wh.status === 'На модерации' ? 'bg-yellow-500 text-black' :
                        'bg-destructive text-destructive-foreground'
                      }`}>
                        {wh.badge}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{wh.id}</p>
                        <p className="text-xs text-muted-foreground">{wh.domain}</p>
                      </div>
                      <Badge 
                        variant={wh.status === 'Активна' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {wh.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'warehouses' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Склады</h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Подключить склад
              </Button>
            </div>
            
            <div className="relative">
              <Icon name="Search" size={16} className="absolute left-3 top-3 text-muted-foreground" />
              <Input 
                placeholder="Найти склад по ID, названию, домену" 
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warehouses.map(wh => (
                <Card key={wh.id} className="p-6 hover-scale cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      wh.status === 'Активна' ? 'bg-primary text-primary-foreground' :
                      wh.status === 'На модерации' ? 'bg-yellow-500 text-black' :
                      'bg-destructive text-destructive-foreground'
                    }`}>
                      {wh.badge}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{wh.id}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{wh.domain}</p>
                      <Badge 
                        variant={wh.status === 'Активна' ? 'default' : 'secondary'}
                        className="text-xs"
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

        {activeSection === 'transactions' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Транзакции</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="completed">Завершенные</TabsTrigger>
                <TabsTrigger value="processing">В обработке</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <Card>
                  <div className="divide-y divide-border">
                    {transactions.map(tx => (
                      <div key={tx.id} className="p-4 hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium">{tx.user}</p>
                            <p className="text-sm text-muted-foreground">{tx.id} • {tx.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">{tx.amount}</p>
                            <Badge 
                              variant={tx.status === 'Завершено' ? 'default' : 'secondary'}
                            >
                              {tx.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'users' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Пользователи</h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Добавить пользователя
              </Button>
            </div>
            
            <Card className="p-6">
              <div className="text-center py-12">
                <Icon name="Users" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Управление пользователями</h3>
                <p className="text-muted-foreground">Раздел находится в разработке</p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'keys' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Ключи активации</h2>
            <Card className="p-6">
              <div className="text-center py-12">
                <Icon name="Key" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Управление ключами</h3>
                <p className="text-muted-foreground">Раздел находится в разработке</p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'proxy' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Прокси-серверы</h2>
            <Card className="p-6">
              <div className="text-center py-12">
                <Icon name="Globe" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Управление прокси</h3>
                <p className="text-muted-foreground">Раздел находится в разработке</p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'settings' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Настройки</h2>
            <Card className="p-6">
              <div className="text-center py-12">
                <Icon name="Settings" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Настройки системы</h3>
                <p className="text-muted-foreground">Раздел находится в разработке</p>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;