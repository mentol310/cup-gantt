const Unit = class {
  constructor(id, name, label) {
    this.id = id
    this.name = name
    this.label = label
  }
}

export class Team extends Unit {
  constructor(id, name) {
    super(id, name, 'team')
  }
}

export class Space extends Unit {
  constructor(id, name) {
    super(id, name, 'space')
  }
}

export class Project extends Unit {
  constructor(id, name, lists) {
    super(id, name, 'project')
    this.lists = lists
  }
}

export class List extends Unit {
  constructor(id, name) {
    super(id, name, 'list')
  }
}

export class Task extends Unit {
  constructor(
    id,
    name,
    assigne,
    startedAt,
    endedAt,
    parentId,
    dependentOn,
    status,
  ) {
    super(id, name, 'task')
    this.assigne = assigne
    this.start = startedAt
    this.duration = endedAt.diff(startedAt, 'seconds')
    this.progress = 0 // kari
    this.parentId = parentId
    this.dependentOn = dependentOn
    this.style = {
      base: {
        fill: status.color,
      },
    }
  }

  toClickupTask() {
    return {
      id: this.id,
      label: this.name,
      start: this.start,
      duration: this.duration,
      progress: this.progress,
      type: 'task',
      assigne: this.assigne,
      style: this.style,
      parentId: this.parentId,
      dependentOn: this.dependentOn,
    }
  }
}
