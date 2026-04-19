import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Передал бухгалтерию год назад и забыл о головной боли. Все отчёты сдаются вовремя, налоговая не беспокоит. Наконец-то могу сосредоточиться на развитии бизнеса.",
    name: "Александр К.",
    role: "Владелец строительной компании",
  },
  {
    quote:
      "Раньше вёл учёт сам и постоянно боялся ошибиться. Теперь профессионалы занимаются всем — и зарплатой, и налогами, и отчётностью. Стоимость окупается многократно.",
    name: "Марина В.",
    role: "ИП, сфера услуг",
  },
  {
    quote:
      "Когда пришла налоговая проверка, именно наш бухгалтер подготовил все документы и сопроводил процесс. Никаких штрафов, никаких доначислений. Очень благодарен за профессионализм.",
    name: "Дмитрий Н.",
    role: "Директор торговой компании",
  },
  {
    quote:
      "Перешли с другой компании — разница колоссальная. Здесь всегда на связи, объясняют простым языком, предупреждают заранее о платежах. Рекомендую всем предпринимателям.",
    name: "Елена С.",
    role: "Владелец кафе",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Мы работаем с предпринимателями из разных отраслей. Их доверие — лучший показатель нашей работы.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
