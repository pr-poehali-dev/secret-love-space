import AudioPlayer from "@/components/AudioPlayer";
import Fireflies from "@/components/Fireflies";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[var(--love-cream)] via-[var(--love-warm)] to-[var(--love-peach)]/40">
      <Fireflies />

      <div className="relative z-10 max-w-lg mx-auto px-4 py-8 pb-16">
        {/* Header */}
        <header className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-2xl">💕</span>
            <Icon name="Lock" size={14} className="text-muted-foreground/50" />
          </div>
          <h1 className="font-handwriting text-5xl md:text-6xl text-foreground/90 mb-2">
            Для любви
          </h1>
          <p className="text-sm text-muted-foreground">1 подписчик</p>
        </header>

        {/* Pinned Post */}
        <div
          className="mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-[var(--love-pink)]/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--love-pink)] to-transparent" />

            <div className="flex items-center gap-2 mb-3">
              <Icon
                name="Pin"
                size={14}
                className="text-[var(--love-rose)]"
              />
              <span className="text-xs font-medium text-[var(--love-rose)] uppercase tracking-wider">
                Закреплено
              </span>
            </div>

            <p className="text-foreground/80 leading-relaxed text-[15px]">
              Здесь уютное пространство. Оно создано для тебя. Приходи, когда
              нужно согреться — я всегда здесь жду тебя 😊
            </p>

            <p className="text-xs text-muted-foreground/60 mt-3">23 января</p>
          </div>
        </div>

        {/* Post 1 */}
        <div
          className="mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/55 transition-all duration-500 group">
            <p className="text-xs text-muted-foreground/60 mb-3">24 января</p>

            <p className="font-handwriting text-3xl text-foreground/70 mb-4 italic">
              начало
            </p>

            <div className="mb-4">
              <AudioPlayer title="Всё было не случай..." duration="3:14" />
            </div>

            <div className="text-foreground/75 leading-relaxed text-[15px] space-y-2">
              <p>Начало нашей истории.</p>
              <p>
                Сначала это был просто стих, а теперь у него есть голос. 😍💕
              </p>
              <p>
                Оставила её двухчастной: сначала — как вспомнилось, потом — как
                осталось в сердце. 💖💕
              </p>
              <p>Это история одного дня, который стал всем. 🎵</p>
            </div>
          </div>
        </div>

        {/* Post 2 */}
        <div
          className="mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/55 transition-all duration-500 group">
            <h2 className="font-handwriting text-4xl text-foreground/85 mb-4 tracking-wide">
              НАВСЕГДА
            </h2>

            <div className="mb-4">
              <AudioPlayer title="Навсегда" duration="3:22" />
            </div>

            <div className="text-foreground/75 leading-relaxed text-[15px] space-y-2">
              <p>Этот файл не существует в поиске.</p>
              <p>Его нет в плейлистах.</p>
              <p>
                Он живёт только здесь, в этом канале, как наш общий секрет.
              </p>
              <p>
                Иногда самые ценные вещи — те, которых не видит никто, кроме нас
                двоих.
              </p>
            </div>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="text-center mt-12 opacity-40">
          <span className="text-2xl">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
