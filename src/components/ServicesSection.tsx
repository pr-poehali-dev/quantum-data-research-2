import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, Users, TrendingUp, Shield, ClipboardList } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Бухгалтерский учёт",
    description:
      "Ведём полный бухгалтерский учёт вашей компании: первичная документация, учёт доходов и расходов, банковские операции, авансовые отчёты. Всё чётко, своевременно и без ошибок.",
  },
  {
    icon: FileText,
    title: "Налоговая отчётность",
    description:
      "Готовим и сдаём все виды налоговых деклараций: НДС, налог на прибыль, УСН, 6-НДФЛ. Следим за сроками, чтобы вы никогда не получали штрафы и пени от налоговой.",
  },
  {
    icon: Users,
    title: "Кадровый учёт и зарплата",
    description:
      "Оформляем сотрудников, ведём табели, считаем зарплату, отпускные и больничные. Сдаём отчёты в ПФР, ФСС и налоговую. Ваши сотрудники всегда получают выплаты вовремя.",
  },
  {
    icon: TrendingUp,
    title: "Налоговая оптимизация",
    description:
      "Анализируем вашу ситуацию и находим законные способы снизить налоговую нагрузку. Помогаем выбрать оптимальную систему налогообложения и грамотно структурировать бизнес.",
  },
  {
    icon: Shield,
    title: "Защита при проверках",
    description:
      "Сопровождаем камеральные и выездные налоговые проверки. Готовим ответы на запросы ФНС, формируем пакет документов и отстаиваем ваши интересы перед контролирующими органами.",
  },
  {
    icon: ClipboardList,
    title: "Восстановление учёта",
    description:
      "Восстанавливаем запущенный или утерянный бухгалтерский учёт за любой период. Разбираемся в сложных ситуациях, приводим документацию в порядок и исправляем ошибки прошлых периодов.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный комплекс бухгалтерских услуг для малого и среднего бизнеса — от первичной документации до защиты при налоговых проверках.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
