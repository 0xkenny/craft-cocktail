import recipeService from '../../service/recipe/index.mjs'

export const get = async (request, response) => {
  const { id } = request.params

  await recipeService.get(id)
}