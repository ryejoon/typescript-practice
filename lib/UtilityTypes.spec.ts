import {Todo, updateTodo} from "./UtilityTypes";

declare var global;

describe('Report Log', () => {

    it('partial', () => {
        const todo1 = {
            title: 'test',
            description: 'dasdas',
        };

        const todo2 = updateTodo(todo1, {
            description: 'dasdas2',
        });

        global.console.log(todo1);
        global.console.log(todo2);
    })

    interface PageInfo {
        title: string;
    }
    type Page = 'home' | 'about' | 'contact';

    it('record', () => {
        const x: Partial<Record<Page, PageInfo>> = {
            about: { title: 'dasdsas' }
        }
        global.console.log(x);
    })

    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    type TodoPreview = Pick<Todo, 'title' | 'completed'>;

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }

    it('pick', () => {

    })

});
