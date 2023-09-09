import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve inserir dois comentários", () => {
    render(<Post />);

    const textarea = screen.getByRole("textbox");
    const button = screen.getByText("Comentar");

    fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
    fireEvent.click(button);

    fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
    fireEvent.click(button);

    const comentarios = screen.getAllByTestId("comentario");

    expect(comentarios.length).toBe(2);
  });
});
