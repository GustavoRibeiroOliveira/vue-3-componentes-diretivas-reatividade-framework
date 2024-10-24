export function itensDeLista1EstaoEmLista2(ingredientesReceita: unknown[], ingredientesSelecionados: unknown[]) {
    return ingredientesReceita.every((ingrediente) => ingredientesSelecionados.includes(ingrediente));
}