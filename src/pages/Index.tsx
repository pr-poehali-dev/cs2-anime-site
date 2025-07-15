import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Target" className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">CS2 Anime</h1>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Киберспорт
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Гайды
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Скины
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Форум
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Steam Профиль
              </Button>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🎮 Анимешный Gaming Portal
                </Badge>
                <h2 className="text-5xl font-bold text-foreground leading-tight">
                  Покори мир
                  <span className="text-primary"> Counter-Strike 2</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Гайды, скины, форум и интеграция с Steam API. Всё для побед в CS2!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Gamepad2" className="w-5 h-5 mr-2" />
                  Играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                  <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                  Гайды
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
              <img 
                src="/img/8198f193-fd39-4fb0-a078-d4335664c230.jpg" 
                alt="CS2 Anime Gaming"
                className="relative z-10 rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-card/50 border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Users" className="w-5 h-5" />
                  Игроки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">125,847</div>
                <p className="text-sm text-muted-foreground">Активных игроков</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Icon name="Trophy" className="w-5 h-5" />
                  Матчи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">2,847</div>
                <p className="text-sm text-muted-foreground">Сегодня сыграно</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Icon name="Zap" className="w-5 h-5" />
                  Турниры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">47</div>
                <p className="text-sm text-muted-foreground">Активных турниров</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/40">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Icon name="Star" className="w-5 h-5" />
                  Скины
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">1,247</div>
                <p className="text-sm text-muted-foreground">В коллекции</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <Icon name="BookOpen" className="w-4 h-4" />
                Гайды
              </TabsTrigger>
              <TabsTrigger value="skins" className="flex items-center gap-2">
                <Icon name="Palette" className="w-4 h-4" />
                Скины
              </TabsTrigger>
              <TabsTrigger value="forum" className="flex items-center gap-2">
                <Icon name="MessageCircle" className="w-4 h-4" />
                Форум
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Crosshair" className="w-5 h-5 text-primary" />
                      Прицеливание
                    </CardTitle>
                    <CardDescription>
                      Основы точной стрельбы в CS2
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Сложность</span>
                        <span className="text-primary">Средняя</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Map" className="w-5 h-5 text-secondary" />
                      Карты
                    </CardTitle>
                    <CardDescription>
                      Изучение позиций и тактик
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={70} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Сложность</span>
                        <span className="text-secondary">Сложная</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Users" className="w-5 h-5 text-accent" />
                      Командная игра
                    </CardTitle>
                    <CardDescription>
                      Тактики и коммуникация
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={90} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Сложность</span>
                        <span className="text-accent">Легкая</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skins" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-primary">AK-47 Redline</CardTitle>
                    <CardDescription>Field-Tested</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-foreground">$47.83</div>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Популярный
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-secondary">M4A4 Asiimov</CardTitle>
                    <CardDescription>Well-Worn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-foreground">$89.12</div>
                      <Badge variant="outline" className="bg-secondary/10 text-secondary">
                        Редкий
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-accent">AWP Dragon Lore</CardTitle>
                    <CardDescription>Factory New</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-foreground">$8,247</div>
                      <Badge variant="outline" className="bg-destructive/10 text-destructive">
                        Легендарный
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40 hover:bg-card/70 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-muted-foreground">Glock Fade</CardTitle>
                    <CardDescription>Minimal Wear</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-foreground">$124.56</div>
                      <Badge variant="outline" className="bg-muted/10 text-muted-foreground">
                        Обычный
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forum" className="space-y-6">
              <div className="space-y-4">
                <Card className="bg-card/50 border-border/40">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="MessageCircle" className="w-5 h-5 text-primary" />
                        Обсуждение нового патча 2.1.4
                      </CardTitle>
                      <Badge variant="outline">47 ответов</Badge>
                    </div>
                    <CardDescription>
                      Что изменилось в балансе оружия и карт
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">AnimeGamer2024</p>
                        <p className="text-sm text-muted-foreground">5 минут назад</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="HelpCircle" className="w-5 h-5 text-secondary" />
                        Помогите с настройкой прицела
                      </CardTitle>
                      <Badge variant="outline">12 ответов</Badge>
                    </div>
                    <CardDescription>
                      Новичку нужна помощь с конфигом
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">CS2_Newbie</p>
                        <p className="text-sm text-muted-foreground">15 минут назад</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border/40">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Star" className="w-5 h-5 text-accent" />
                        Лучшие скины недели
                      </CardTitle>
                      <Badge variant="outline">89 лайков</Badge>
                    </div>
                    <CardDescription>
                      Подборка самых крутых скинов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">SkinCollector</p>
                        <p className="text-sm text-muted-foreground">1 час назад</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Target" className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">CS2 Anime</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший портал для игроков Counter-Strike 2
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Гайды</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Скины</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Steam Group</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Баг-репорт</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CS2 Anime. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}