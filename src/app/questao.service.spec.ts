import { TestBed, inject } from '@angular/core/testing';

import { QuestaoService } from './questao.service';

describe('QuestaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestaoService]
    });
  });

  it('should be created', inject([QuestaoService], (service: QuestaoService) => {
    expect(service).toBeTruthy();
  }));
});
