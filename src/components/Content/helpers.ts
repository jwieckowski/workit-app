import { TrainingSetItem } from '../../common/types/training'

export const getCurrentDate = () => {
  return new Date().toISOString().slice(0, 10)
}

export const formatRepsWeights = (series: TrainingSetItem[]) => {
    let text = ``
    series.forEach(s => {
      text += `${s.weights}x${s.reps}, `
    })
    return text.substring(0, text.length-2)
  }