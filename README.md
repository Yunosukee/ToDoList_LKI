REPO: <https://github.com/Yunosukee/ToDoList_LKI>
LIVE: <https://note.czechulab.duckdns.org/>

# 📋 ToDoList_LKI 🚀

Projekt na studium przypadku - programowanie w grupie programistycznej 🧑‍💻👩‍💻

## 🌟 Projekt Aplikacji do Notatek 📝

- 🛠️ **Tworzenie Notatek**: Łatwo twórz nowe notatki z możliwością dostosowywania treści!
- ✏️ **Edycja Notatek**: Aktualizuj i modyfikuj swoje notatki w dowolnym momencie.
- 🗑️ **Usuwanie Notatek**: Usuwaj niepotrzebne notatki, aby zachować porządek.
- 🤝 **Udostępnianie Notatek**: Podziel się swoimi notatkami z innymi użytkownikami aplikacji - współpraca i dzielenie się wiedzą!

### 💻📱 Technologie

#### 🌈 Frontend

- **React**: Tworzymy interaktywne i dynamiczne interfejsy użytkownika.
- **TypeScript**: Zapewniamy silne typowanie i większą przejrzystość kodu.
- **DaisyUI**: Stosujemy eleganckie i responsywne komponenty UI, dzięki czemu aplikacja jest piękna i funkcjonalna.

#### ⚙️ Backend

- **Node.js**: Potężne środowisko do tworzenia skalowalnych aplikacji sieciowych.
- **Express**: Elastyczny framework do tworzenia aplikacji webowych i API.
- **PostgreSQL**: Bezpieczna i wydajna baza danych zapewniająca trwałość i niezawodność danych.

#### 🌟 Podsumowanie

Ten projekt to idealna okazja do nauki, praktyki i tworzenia czegoś niesamowitego w świecie kodowania! Nie możemy się doczekać, aby zobaczyć, co wspólnie stworzymy! 🚀💪🎉

---

# 🚀 Jak Uruchomić Projekt? 🌐

Zapraszam do zapoznania się z przewodnikiem, który pomoże Ci efektywnie uruchomić całą aplikację do notatek wyłącznie za pomocą Docker Compose! 📝💻🐳

## 💻 Przygotowanie Projektu

Aby przygotować projekt do uruchomienia:

1. **Konfiguracja środowiska**:

   - Najpierw musisz ręcznie przygotować plik `.env` w folderze `frontend`. Ten plik powinien zawierać wszystkie niezbędne zmienne środowiskowe. Przykładowa zawartość pliku `.env`:

     ```conf
     VITE_APP_NAME=Notatki.dzejes
     VITE_BASE_PATH=/
     VITE_API_URL=http://localhost:4174
     ```

   - Upewnij się, że plik `.env` jest poprawnie skonfigurowany i zapisany przed przejściem do następnego kroku.

## 🐳 Uruchomienie Projektu z Użyciem Docker Compose

2. **Szybki Start z Docker Compose**:

   - Wykorzystaj załączony w głównej ścieżce projektu plik `docker-compose.yml`, aby uruchomić zarówno Backend, jak i Frontend jednocześnie. Użyj następującej komendy w terminalu:

     ```bash
     docker-compose up
     ```

   - Ta komenda uruchomi całą aplikację, łącząc Backend i Frontend, zgodnie z konfiguracją określoną w `docker-compose.yml`.

## 🔄 Udostępnianie Notatek

3. **Mechanizm udostępniania**:
   - Udostępnianie notatek w aplikacji bazuje na ID użytkowników. Możesz udostępnić notatki, podając konkretne ID użytkownika.
   - Przykłady ID użytkowników już istniejących:
     - **admin**: ID 1
     - **user**: ID 2

Przygotowanie i uruchomienie projektu za pomocą Docker Compose gwarantuje szybki i bezproblemowy start. Idealne rozwiązanie dla tych, którzy cenią sobie efektywność i wygodę! 🚢💼🔧

Jeśli masz jakiekolwiek pytania lub potrzebujesz dalszej pomocy, jestem do Twojej dyspozycji. Powodzenia w pracy nad projektem! 🌟🛠️🎉

> [!NOTE]  
> login: admin
> password: admin
> id: 1

> [!NOTE]  
> login: Niemczyk
> password: Niemczyk
> id: 3

> [!NOTE]  
> login: Piątek
> password: Piątek
> id: 4

---

_README przygotowane przy pomocy ⚙️ ChatGPT ⚙️_
