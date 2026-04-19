export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">БухПро</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональное бухгалтерское сопровождение малого и среднего бизнеса. © 2025 БухПро. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Пн–Пт: 9:00 – 18:00</li>
              <li>
                <a href="tel:+74951234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@buhpro.ru" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@buhpro.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
