# [CMS Tag Kpomponent](https://github.com/WooooCash/cms-tag-kpomponent)

Zdeployowane na [vercel](https://cms-tag-kpomponent-pfi9qevkc-woocashs-projects.vercel.app/)

### Showcase
![Recording 2024-04-28 at 21 56 12](https://github.com/WooooCash/cms-tag-kpomponent/assets/58574586/bcea98ae-34b1-486c-a98a-6531a362a908)

### Uruchomienie lokalne
Zainstalowanie potrzebnych bibliotek: `npm install`

Uruchomienie serwera: `npm run dev`

### Dokumentacja

**Podział komponentów**
- Generyczne w `src/components`
  - `Card` - element z bazowym stylem wyodrębniający zawartości od tła
  - `Toolbar` - element do wybierania narzędzia
  - `ToolbarButton` - element zagnieżdżany w Toolbar
    - `tooltip: string` - text do wyświetlenia przy najechaniu myszką (NIE ZAIMPLEMENTOWANE)
    - `icon: IconType` - ikonka do wyświetlenia na przycisku
    - `selected: boolean` - czy aktualne narzędzie jest aktywne
  - `WidgetTitleBar` - element służący jako tytuł widgetu + przycisk zamknięcia widgetu
    - `title: string` - tytuł do wyświetlenia
  - `Search` - element z inputem tekstowym i przyciskiem anulującym wyszukiwanie
    - `placeholder: string` - placeholder w inpucie
    - `value: string` - wartość zmiennej w której jest przechowana wartość inputu
    - `onChange: CallableFunction` - funkcja callback aby móc modyfikować zmienną value przy pisaniu + usunięciu tekstu przyciskiem
  - `Pill` - element z tesktem i przyciskiem usunięcia
    - `id: number` - identyfikator aby móc rozróżniać elementy korzystając z callbacków
    - `text: string` - tekst do wyświetlenia w elemencie
    - `onDelete: CallableFunction` - funkcja callback do której można przekazać `id` aby obsłużyć usunięcie pigułki
  - `Rating` - element przedstawiający jakiś progres. Ma 6 stanów - od 0 do 5 wypełnionych pigułek, z różnymi opisami i kolorami. Stany są wyliczane dynamicznie na podstawie podanych parametrów
    - `score: number` - aktualna wartość tego co mierzymy
    - `maxScore: number` - wartość która stanowi 100% progresu
- Konkretnie pod tagi w `src/tags/components`
  - `TagWidget` - główny element widgetu tagów który trzyma strukturę oraz główną logikę całego komponentu.
  - `TagSearchResults` - element wyświetlający listę wyników wyszukania które można zaznaczyć i wybrać wciskając przycisk "Zapisz"
    - `results: TagEntry[]` - lista wyników zwróconych przez zapytanie
    - `onSubmit: CallableFunction` - funkcja callback obsługująca przekazane tagi które zostały zaznaczony i zapisane
  - `TagAI` - element z kilkoma funkcjami AI wspomagającymi użytkownika przy wyborze tagów
  - `TagRatingInfo` - element wyświetlający odpowiednie info pod belką progresu na podstawie ilości wybranych tagów
    - `tagCount: number` - aktualna ilość wybranych tagów
    - `desiredCount: number` - docelowa ilość wybranych tagów aby otrzymać 100% wypełnienia progresu

**Testy**

*Brak* - Zabrakło czasu

**Biblioteki**
- React + Typescript na Vite + SVC
- React Icons

**Stylowanie**

Czysty css zawarty w plikach `.module.css`

**Wycena czasowa**
- W obecnym stanie - 1 man day
- Z testami - 1.5 days
