export function HasParentQuery(parent_type, query){
  return {
    has_parent:{
      parent_type, query
    }
  }
}
