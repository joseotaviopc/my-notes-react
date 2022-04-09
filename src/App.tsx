import { useEffect, useState } from "react";
import "./App.css";

interface Note {
  id?: number;
  title: string;
  content: string;
  categoryId: number;
}

interface Category {
  id?: number;
  name: string;
  color: string;
}

function App() {
  const logo = "My Notes";

  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "React",
      color: "#87cefa",
    },
  ]);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      categoryId: 1,
      title: "Title",
      content: "Content",
    },
  ]);

  const [isCategoryDialogOpen, setIsCategoryDialogOpen] =
    useState<boolean>(false);
  const [isNoteDialogOpen, setIsNoteDialogOpen] = useState<boolean>(false);

  useEffect(() => {}, []);

  const openDialog = (dialogName: "note" | "category"): void => {
    if (dialogName === "note") {
      setIsNoteDialogOpen(true);
    }
    if (dialogName === "category") {
      setIsCategoryDialogOpen(true);
    }
  };

  const closeDialog = (dialogName: "note" | "category"): void => {
    if (dialogName === "note") {
      setIsNoteDialogOpen(false);
    }
    if (dialogName === "category") {
      setIsCategoryDialogOpen(false);
    }
  };

  return (
    <div className="font-sans">
      <header>
        <div className="container">
          <div className="logo">{logo}</div>
        </div>
      </header>

      <main className="container">
        <aside>
          <div className="title">
            <h3>Categories</h3>
            <button className="rounded-md block w-auto px-4 bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300" onClick={() => openDialog("category")}>Add new</button>
          </div>
          {/* Buscar categorias na API */}
          <div className="category">
            <span className="dot bg-indigo-600"></span>
            {/* Carregar categoria/alterar/fechar */}
            <span>React</span>
          </div>
          <div className="category">
            <span className="dot bg-indigo-600"></span>
          </div>
        </aside>

        <section>
          <div className="title ">
            <h3>Notes</h3>
            <button className="rounded-md block w-auto px-4 bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300" onClick={() => openDialog("note")}>Add new</button>
          </div>
          {/* Buscar categorias na API */}
          <div className="notes-list">
            <div className="note bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300">
              {/* Carregar Note/alterar/fechar */}
              <h4>Title</h4>
              <p>Content</p>
            </div>
            <div className="note bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300"></div>
            <div className="note bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300"></div>
            <div className="note bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300"></div>
            <div className="note bg-indigo-300 hover:bg-indigo-600 hover:text-slate-300"></div>
          </div>
        </section>
      </main>

      {(isCategoryDialogOpen || isNoteDialogOpen) && (
        <div className="overlay">
          {isNoteDialogOpen && (
            <dialog className="center">
              {/* Solicitar title(input text), content(textarea) e categoryId(select) */}
              <div className="dialog-content">
                <h2>Note Dialog Title</h2>
                <p>
                  In order to give an example of paragraph, we kindly ask you to
                  change and use anything you want as content
                </p>
              </div>
              <div className="dialog-actions">
                <button onClick={() => closeDialog("note")}>Cancel</button>
                {/* Create API POST */}
                <button onClick={() => closeDialog("note")}>Confirm</button>
              </div>
            </dialog>
          )}
          {isCategoryDialogOpen && (
            <dialog className="center">
              {/* Solicitar name(input text) e color(input text) */}
              <div className="dialog-content">
                <h2>Category Dialog Title</h2>
                <p>
                  In order to give an example of paragraph, we kindly ask you to
                  change and use anything you want as content
                </p>
              </div>
              <div className="dialog-actions">
                <button onClick={() => closeDialog("category")}>Cancel</button>
                {/* Create API POST */}
                <button onClick={() => closeDialog("category")}>Confirm</button>
              </div>
            </dialog>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
