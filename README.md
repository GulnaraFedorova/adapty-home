# Adapty Homepage Clone

Одностраничное приложение на Vite + React + JS, копирующее главную страницу Adapty для UX-прототипирования.

## Структура проекта

```
adapty-home/
├── src/
│   ├── components/
│   │   └── sections/          # React компоненты секций (БЭМ)
│   │       ├── Header.jsx
│   │       ├── Hero.jsx
│   │       ├── TrustedApps.jsx
│   │       ├── HelpSection.jsx
│   │       ├── SLASection.jsx
│   │       ├── CodeSection.jsx
│   │       └── Footer.jsx
│   ├── data/
│   │   └── home.js            # Контент всех секций
│   ├── App.jsx                # Главный компонент
│   ├── App.css                # Общие стили
│   └── index.css              # Базовые стили
├── public/
│   └── assets/                # Изображения и ресурсы
└── package.json
```

## Компоненты

Все компоненты используют БЭМ методологию и находятся в `src/components/sections/`:

- **Header** - Шапка сайта с навигацией (`header`, `header__nav`, `header__action`)
- **Hero** - Главная секция с заголовком и формой (`hero`, `hero__title`, `hero__cta`)
- **TrustedApps** - Секция с логотипами (`trusted-apps`, `trusted-apps__grid`)
- **HelpSection** - Карточки для разных ролей (`help-section`, `help-section__card`)
- **SLASection** - Статистика SLA (`sla-section`, `sla-section__stat`)
- **CodeSection** - Секция с примерами кода (`code-section`, `code-tabs`)
- **Footer** - Подвал сайта (`footer`, `footer__section`)

## Контент

Весь контент вынесен в `src/data/home.js`:
- `headerData` - данные для шапки
- `heroData` - данные для hero секции
- `trustedAppsData` - данные для секции с логотипами
- `helpSectionData` - данные для карточек
- `slaData` - данные для статистики
- `codeSectionData` - данные для секции с кодом
- `footerData` - данные для подвала

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Просмотр собранной версии
npm run preview
```

## Особенности

- ✅ Все ссылки заменены на заглушки (`href="#"`)
- ✅ Формы не отправляют данные (`preventDefault`)
- ✅ Контент вынесен в `src/data/home.js`
- ✅ Все классы в стиле БЭМ
- ✅ Адаптивный дизайн (375px - mobile, 1440px - desktop)
- ✅ Типографика с использованием `clamp()`
- ✅ Визуально идентичная копия оригинального сайта

## Адаптивность

Проект адаптирован для:
- **Mobile**: 375px и выше
- **Tablet**: 768px и выше
- **Desktop**: 1024px и выше
- **Large Desktop**: 1440px

Используются медиа-запросы:
- `@media (max-width: 375px)` - мобильные устройства
- `@media (min-width: 768px)` - планшеты
- `@media (min-width: 1024px)` - десктопы

## Проверка

После запуска откройте браузер и проверьте:

1. ✅ Все секции отображаются корректно
2. ✅ Все изображения загружаются
3. ✅ Все ссылки ведут на `#`
4. ✅ Формы не отправляют данные
5. ✅ Адаптивность работает на разных размерах экрана
6. ✅ `npm run build` проходит успешно

## БЭМ классы

Примеры использования БЭМ:
- Блок: `hero`
- Элемент: `hero__title`, `hero__subtitle`
- Модификатор: `header__action--primary`, `code-tabs__tab--active`

## Технологии

- **Vite** - сборщик
- **React** - UI библиотека
- **JavaScript** - язык программирования
- **CSS** - стилизация (БЭМ методология)
