import { Card, CardContent } from "@/components/ui/card"

const cases = [
  {
    title: "Строительная компания",
    category: "ОСНО + кадровый учёт",
    description:
      "Взяли на сопровождение компанию с запущенным учётом за 2 года. Восстановили документацию, подали уточнённые декларации, урегулировали задолженность перед ФНС без штрафов.",
    tags: ["ОСНО", "НДС", "Восстановление учёта", "18 сотрудников"],
    result: "Сэкономлено 340 000 ₽ на штрафах",
  },
  {
    title: "Сеть кофеен",
    category: "УСН + торговля",
    description:
      "Настроили учёт для трёх точек на УСН «доходы-расходы». Внедрили ЭДО с поставщиками, оптимизировали налоговую нагрузку за счёт грамотного учёта расходов.",
    tags: ["УСН 15%", "Розница", "ЭДО", "3 точки"],
    result: "Налоговая нагрузка снижена на 23%",
  },
  {
    title: "IT-компания",
    category: "УСН + ИТ-льготы",
    description:
      "Помогли получить аккредитацию в Минцифры и применить льготы для IT-компаний: страховые взносы 7,6% вместо 30%. Настроили раздельный учёт для подтверждения льготы.",
    tags: ["УСН 6%", "IT-льготы", "Страховые взносы", "12 сотрудников"],
    result: "Экономия 1 200 000 ₽ в год",
  },
  {
    title: "Производственное предприятие",
    category: "ОСНО + производство",
    description:
      "Ведём полный учёт производственного предприятия: калькуляция себестоимости, учёт сырья и готовой продукции, квартальная отчётность по НДС и налогу на прибыль.",
    tags: ["ОСНО", "Производство", "Себестоимость", "25 сотрудников"],
    result: "Отчётность сдаётся в срок 3 года подряд",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные истории клиентов — как мы помогаем бизнесу навести порядок в учёте, сэкономить на налогах и спать спокойно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 w-fit">
                  <span className="text-sm font-semibold text-primary">{item.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
